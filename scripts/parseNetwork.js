import fs from 'fs'
import * as R from 'ramda'
import distance from '@turf/distance'
import flatten from '@turf/flatten'
import { geometryCollection } from '@turf/helpers'
import { getOrderedLines } from 'line-join'

const IN_stationFile = 'emplacement-des-gares-idf.json'
const IN_lineFile = 'traces-du-reseau-ferre-idf.geojson'
const IN_manualConnections = 'manual_connections.json'

const OUT_stationFile = '../dist/data/stations.json'
const OUT_lineFile = '../dist/data/lines.json'
const OUT_connectionFile = '../dist/data/connections.json'

const mode_mapping = {
  Métro: 'metro',
  Metro: 'metro',
  RER: 'rer',
  Tramway: 'tram',
  Train: 'train',
  TER: 'train',
  Navette: 'navette'
}

let stations = []
let lines = []

const records = JSON.parse(fs.readFileSync(IN_stationFile))
stations = R.pipe(
  R.map(r => {
    const f = r.fields
    return {
      id: `${f.id_ref_zdl}_${f.idrefligc}`,
      id_station: f.id_ref_zdl,
      name: f.nom,
      type: mode_mapping[f.mode],
      coords: r.geometry.coordinates,
      idrefligc: f.idrefligc
    }
  }),
  R.filter(s => ['metro', 'rer', 'tram'].includes(s.type))
)(records)

const lineSegments = JSON.parse(fs.readFileSync(IN_lineFile)).features
lines = R.pipe(
  R.map(s => {
    return {
      id: s.properties.idrefligc,
      name: s.properties.res_com,
      type: mode_mapping[s.properties.mode],
      color: '#' + (s.properties.colourweb_hexa || '000'),
      geom: s.geometry
    }
  }),
  R.filter(s => ['metro', 'rer', 'tram'].includes(s.type)),
  R.groupBy(R.prop('id')),
  R.map(segments => {
    // get segments as a flat array of coordinates array
    const coords = R.pipe(
      R.map(R.prop('geom')),
      geometryCollection,
      flatten,
      R.prop('features'),
      R.map(R.path(['geometry', 'coordinates']))
    )(segments)
    return {
      ...R.pick(['id', 'name', 'type', 'color'], R.head(segments)),
      branches: getOrderedLines(coords)
    }
  }),
  R.values
)(lineSegments)

const attachStations = (stations, { branches, id: lineRef }) => {
  const lineStations = stations.filter(s => s.idrefligc === lineRef)
  const branchesWithStations = branches.map(branch => ({
    segments: branch,
    stations: branch
      .reduce((acc, s, i) => {
        if (i === 0) {
          acc.push(R.head(s))
        }
        acc.push(R.last(s))
        return acc
      }, [])
      .map(point => closestStation(point, lineStations))
  }))
  return branchesWithStations
}

const closestStation = (coords, stations) => {
  return R.pipe(
    R.map(station => ({ dist: distance(coords, station.coords), station })),
    R.sortBy(R.prop('dist')),
    R.head(),
    R.path(['station', 'id'])
  )(stations)
}

const linesWithStations = lines.map(line => ({
  ...line,
  branches: attachStations(stations, line)
}))

const latLngStations = stations.map(station => ({
  ...station,
  coords: station.coords.slice().reverse()
}))

let pairs = arr => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat()

// create connections from stations sharing the same id
const connections = R.pipe(
  R.groupBy(R.prop('id_station')),
  R.values(),
  R.reject(g => g.length < 2),
  R.map(R.map(R.prop('id'))),
  R.map(pairs),
  allPairs => allPairs.flat(),
  R.map(([stationA, stationB]) => ({
    stationA,
    stationB
  }))
)(stations)

const manualConnections = JSON.parse(fs.readFileSync(IN_manualConnections))

fs.writeFileSync(OUT_stationFile, JSON.stringify(latLngStations))
fs.writeFileSync(OUT_lineFile, JSON.stringify(linesWithStations))
fs.writeFileSync(OUT_connectionFile, JSON.stringify(connections.concat(manualConnections)))
