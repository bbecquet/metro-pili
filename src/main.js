import Color from 'color'
import PTGraph from './PTGraph.js'

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

function init(ratp) {
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

  // Stations
  ratp.forEachStation(function (station) {
    const { id, coords, name, lines } = station
    const stationMarker = L.marker(coords, {
      icon: L.divIcon({
        className: 'stationMarker',
        html: `<div class="stationMarker-inner" id="station-${id}"></div>`
      })
    })
      .addTo(_map)
      .on('click', () => toggleRoutePoint(station))
      .on('mouseover', ({ target }) => {
        if (routePoints.includes(station)) {
          return
        }
        target.bindTooltip(name, {
          opacity: 1,
          className: 'stationTooltip',
          permanent: true
        })
      })
      .on('mouseout', ({ target }) => {
        if (routePoints.includes(station)) {
          return
        }
        target.unbindTooltip()
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

  ratp.forEachLine(function (line) {
    line.branches.forEach(function (b) {
      const coordsPath = b.stations.map(stationId => ratp.stationById(stationId).coords)
      const darkerColor = Color(line.color).darken(0.25).hex()
      const weight = line.type === 'rer' ? 7 : line.type === 'tram' ? 2 : 4

      drawPolys(coordsPath, [
        { pane: 'outlines', color: darkerColor, weight: weight + 4 },
        { pane: 'lines', color: line.color, weight }
      ])
    })
  })

  // Connections
  ratp.innerGraph.forEachEdge(function (edge) {
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

  // Route computing
  function computeRoute(startStation, endStation) {
    mapClearPath()

    if (startStation && endStation) {
      const route = ratp.shortestRoute(startStation, endStation, {
        edgeFilter: edge => ALLOWED_TYPES[edge.data.type],
        edgeCost: travelCostLessConnections
      })
      displayResult(route)
    }

    return
  }

  const routePoints = []

  function removeRoutePoint(i) {
    const [removedPoint] = routePoints.splice(i, 1)
    stationMarkers[removedPoint.id].unbindTooltip()
  }

  function toggleRoutePoint(station) {
    const i = routePoints.findIndex(s => s === station)
    if (i > -1) {
      removeRoutePoint(i)
    } else {
      routePoints.push(station)
      if (routePoints.length > 2) {
        removeRoutePoint(0)
      }
    }
    computeRoute(routePoints[0], routePoints[1])
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

function start() {
  loadNetwork().then(init)
}

window.onload = start
