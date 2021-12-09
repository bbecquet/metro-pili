import Color from 'color'
import PTGraph from './PTGraph.js'
import * as focusTrap from 'focus-trap'

const DEFAULT_TIMES = {
  connection: 60, // 1 min
  metro: 90, // 1 min 30 between 2 metro stations... Override in line definition
  rer: 180,
  tram: 90
}

const travelTime = (e, _costDone) => e.data.travelTime || DEFAULT_TIMES[e.data.type]
const travelTimeFastest = e => {
  if (e.data.travelTime) return e.data.travelTime
  return DEFAULT_TIMES[e.data.type]
}
const travelCostLessConnections = e => (e.data.type === 'connection' ? 3 : 1)

const ALLOWED_TYPES = {
  metro: true,
  rer: true,
  tram: true,
  connection: true
}

function initAboutDialog() {
  const trap = focusTrap.createFocusTrap(document.querySelector('#about .dialog'))
  const dialogClose = document.getElementById('about-close')
  const closeAbout = () => {
    trap.deactivate()
    document.body.classList.remove('about')
    document.getElementById('wrapper').removeAttribute('aria-hidden')
  }
  dialogClose.addEventListener('click', closeAbout)
  document.getElementById('about-button').addEventListener('click', () => {
    document.body.classList.add('about')
    document.getElementById('wrapper').setAttribute('aria-hidden', 'true')
    dialogClose.focus()
    trap.activate()
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeAbout()
      }
    })
  })
}

function loadNetwork() {
  const network = new PTGraph()

  const getJson = url => fetch(url).then(response => response.json())

  return Promise.all([
    getJson('data/stations.json'),
    getJson('data/lines.json'),
    getJson('data/connections.json')
  ]).then(([stations, lines, connections]) => {
    network.loadNetwork({ stations, lines, connections })
    return network
  })
}

function initApp(network) {
  const _map = L.map('map', {
    center: [48.86, 2.335],
    zoom: 13,
    minZoom: 13,
    maxZoom: 15,
    layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    attributionControl: false
  })

  // ensure drawing order of layers
  _map.createPane('outlines')
  _map.createPane('lines')
  _map.createPane('connOutlines')
  _map.createPane('conn')

  const stationMarkers = {}
  const stationsWithConnections = new Set()

  const lineIndex = {}
  network.forEachLine(line => {
    lineIndex[line.id] = line
  })

  const stations = []
  network.forEachStation(station => {
    const lineName = lineIndex[station.idrefligc].name.replace('METRO ', '').replace('TRAM ', 'T')
    stations.push({
      ...station,
      uniqueName: `${station.name} (${lineName})`
    })
  })

  const stationToolTip = (station, on) => {
    const marker = stationMarkers[station.id]
    if (!marker) {
      return
    }
    if (on) {
      stationMarkers[station.id].bindTooltip(station.name, {
        opacity: 1,
        className: 'stationTooltip',
        permanent: true
      })
    } else {
      marker.unbindTooltip()
    }
  }

  // Stations
  stations.forEach(function (station) {
    const { id, coords, name, lines } = station
    const lineColor = Color(lineIndex[station.idrefligc].color)
    const offLedColor = (lineColor.isDark() ? lineColor : lineColor.darken(0.5))
      .desaturate(0.75)
      .hex()
    const stationMarker = L.marker(coords, {
      icon: L.divIcon({
        className: 'stationMarker',
        html: `<div class="stationMarker-inner" id="station-${id}" style="--led-color:${offLedColor};"></div>`
      })
    })
      .addTo(_map)
      .on('click', () => toggleRoutePoint(station))
      .on('mouseover', () => {
        if (routePoints.includes(station)) {
          return
        }
        stationToolTip(station, true)
      })
      .on('mouseout', () => {
        if (routePoints.includes(station)) {
          return
        }
        stationToolTip(station, false)
      })
    stationMarkers[id] = stationMarker
    if (lines.size > 1) {
      stationsWithConnections.add(station)
    }
  })

  // Lines
  function drawPolys(coords, options = []) {
    options.forEach(opts => {
      L.polyline(coords, { clickable: false, opacity: 1, ...opts }).addTo(_map)
    })
  }

  network.forEachLine(function (line) {
    const segments = line.branches.flatMap(({ segments }) =>
      segments.map(segment => segment.map(coord => coord.slice().reverse()))
    )
    const color = Color(line.color).hex()
    const darkerColor = Color(color).darken(0.25).hex()
    const weight = line.type === 'rer' ? 7 : line.type === 'tram' ? 2 : 4
    segments.forEach(coordsPath => {
      drawPolys(coordsPath, [
        { pane: 'outlines', color: darkerColor, weight: weight + 2 },
        { pane: 'lines', color: color, weight }
      ])
    })
  })

  // Connections
  network.innerGraph.forEachEdge(function (edge) {
    if (edge.data.interStation) {
      const {
        from: { data: stationA },
        to: { data: stationB }
      } = edge
      stationsWithConnections.add(stationA)
      stationsWithConnections.add(stationB)
      drawPolys(
        [stationA.coords, stationB.coords],
        [
          { pane: 'connOutlines', color: 'black', weight: 8 },
          { pane: 'conn', color: 'white', weight: 6 }
        ]
      )
    }
  })
  stationsWithConnections.forEach(({ coords }) => {
    drawPolys(
      [coords, coords],
      [
        { pane: 'connOutlines', color: 'black', weight: 20 },
        { pane: 'conn', color: 'white', weight: 18 }
      ]
    )
  })
  // -----

  let routePoints = []
  initForm()

  function initForm() {
    // fill input suggestion list
    document.getElementById('station-list').innerHTML = stations
      .map(map => map.uniqueName)
      .sort()
      .map(name => `<option value="${name}" />`)
      .join('')

    function validator(field, index) {
      field.addEventListener('change', ({ target }) => {
        const station = target.value ? stations.find(s => s.uniqueName === target.value) : null
        const invalid = target.value && !station
        target.setCustomValidity(invalid ? 'Station inconnue' : '')
        if (index === 0) {
          changeRoutePoints(station, routePoints[1])
        } else {
          changeRoutePoints(routePoints[0], station)
        }
      })
    }

    validator(document.getElementById('start'), 0)
    validator(document.getElementById('end'), 1)
  }

  function clearTooltips() {
    _map.eachLayer(function (layer) {
      if (layer.options.pane === 'tooltipPane') {
        layer.remove()
      }
    })
  }

  // Route computing
  function computeRoute(startStation, endStation) {
    mapClearPath()

    if (startStation && endStation) {
      console.log(
        JSON.stringify({
          comm: startStation.name + '=>' + endStation.name,
          stationA: startStation.id,
          stationB: endStation.id
        })
      )
      const route = network.shortestRoute(startStation, endStation, {
        edgeFilter: edge => ALLOWED_TYPES[edge.data.type],
        edgeCost: travelCostLessConnections
      })
      displayResult(route)
    }
  }

  function changeRoutePoints(from, to) {
    clearTooltips()
    routePoints = [from, to]
    routePoints.forEach(pt => {
      if (pt) {
        stationToolTip(pt, true)
      }
    })
    document.getElementById('start').value = routePoints[0]?.uniqueName || ''
    document.getElementById('end').value = routePoints[1]?.uniqueName || ''
    computeRoute(routePoints[0], routePoints[1])
  }

  // Urgh…
  function toggleRoutePoint(station) {
    if (station === routePoints[0]) {
      changeRoutePoints(null, routePoints[1])
    } else if (station === routePoints[1]) {
      changeRoutePoints(routePoints[0], null)
    } else if (!routePoints[0]) {
      changeRoutePoints(station, routePoints[1])
    } else if (!routePoints[1]) {
      changeRoutePoints(routePoints[0], station)
    } else {
      changeRoutePoints(routePoints[1], station)
    }
  }

  function mapClearPath() {
    const pathLeds = [...document.getElementsByClassName('path')]
    pathLeds.forEach(pathLed => {
      pathLed.style = ''
      pathLed.classList.remove('path')
    })
  }

  let zIndexOffset = 1
  function displayResult(path) {
    if (!path) {
      return
    }

    const stations = []
    path.forEach(({ to: { data: toPoint } }) => {
      if (
        toPoint.hasOwnProperty('station') &&
        (stations.length === 0 || stations[stations.length - 1] !== toPoint.station)
      ) {
        stations.push({ station: toPoint.station, color: toPoint.line.color })
      }
    })

    stations.forEach(({ station, color }) => {
      const haloColor = Color(color).saturate(3).lightness(85).hex()
      const ledColor = Color(color).lightness(65).hex()
      const stationLed = document.getElementById(`station-${station.id}`)
      stationLed.style = `--line-color:${color};--led-color:${ledColor};--halo-color:${haloColor}`
      stationLed.classList.add('path')
      stationMarkers[station.id].setZIndexOffset(zIndexOffset++)
    })
  }
}

function init() {
  loadNetwork().then(initApp)
  initAboutDialog()
}

window.onload = init
