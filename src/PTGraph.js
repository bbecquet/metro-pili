/**
Functions to create and manipulate transportation network graphs,
with notions of stations, stops, lines and connections.
It is *NOT* GTFS compatible as-is (no management of real time tables,
only basic travel times between stations)
*/

import jkstra from 'jkstra'

const PTGraph = function () {
  const graph = new jkstra.Graph()
  const stations = {}
  const lines = {}

  function createSegment(fromStop, toStop, _toStation, line, direction, time) {
    const edgeData = { line, type: line.type, direction }
    if (time) {
      edgeData.travelTime = time
    }
    line.segments.push(graph.addEdge(fromStop, toStop, edgeData))
  }

  /**
  Creates graph elements to modelize a stop for a line at a given station,
  */
  function createStop(station, line, direction) {
    // try to find an existing stop (for branch reconnection)
    const tmp = graph.outEdges(
      station.vertex,
      e => e.to.data.line === line && e.to.data.direction === direction
    )
    if (tmp?.length > 0) {
      return tmp[0].to
    }

    const stop = graph.addVertex({ station, line, direction })
    graph.addEdgePair(stop, station.vertex, { type: 'connection' })
    return stop
  }

  /**
  Adds a line branch to the graph.
  A branch is defined as a linear and ordered sequence of existing station ids.
  */
  function addBranch(line, stationIds, direction, times = []) {
    if (stationIds.length < 2) {
      return
    }
    let station,
      stop,
      prevStop = null,
      time = null
    for (let i = 0; i < stationIds.length; i++) {
      station = stations[stationIds[i]]
      if (!station) {
        console.error('Unknown station "' + stationIds[i] + '". Skip.')
        continue
      }
      station.lines.add(line)
      stop = createStop(station, line, direction)
      if (prevStop) {
        createSegment(prevStop, stop, station.vertex, line, direction, times[i - 1])
      }
      prevStop = stop
    }
  }

  /**
  Ensure the travel time is defined as a 2 cell array
  */
  function normalizeBiDirTime(time) {
    const times = [].concat(time)
    if (times.length === 1) {
      times.push(times[0])
    }
    return times
  }

  /**
  Establish an explicit connection between two stations, with a given travel time.
  Used to connect otherwise disconnected stations
  (example: on-foot transfer between 2 stations of different transport type)
  */
  function connectStations(stationA, stationB, times) {
    graph.addEdge(stationA.vertex, stationB.vertex, {
      type: 'connection',
      interStation: true,
      explicit: true,
      travelTime: times[0]
    })
    graph.addEdge(stationB.vertex, stationA.vertex, {
      type: 'connection',
      interStation: true,
      explicit: true,
      travelTime: times[1]
    })
  }

  /**
  Establish an explicit connection between stops of two different lines
  at the same station, with a given travel time.
  Used to assign specific travel times to connections instead of default ones
  */
  function connectLinesAtStation(station, lineA, lineB, times) {
    // find stops of lineA
    const stopsA = graph
      .outEdges(station.vertex, edge => edge.to.data.line === lineA)
      .map(edge => edge.to)

    const stopsB = graph
      .outEdges(station.vertex, edge => edge.to.data.line === lineB)
      .map(edge => edge.to)

    stopsA.forEach(function (a) {
      stopsB.forEach(function (b) {
        graph.addEdge(a, b, { type: 'connection', explicit: true, travelTime: times[0] })
        graph.addEdge(b, a, { type: 'connection', explicit: true, travelTime: times[1] })
      })
    })
  }

  const publicAPI = {
    innerGraph: graph,

    loadNetwork: function (networkDef) {
      publicAPI.loadStations(networkDef.stations)
      publicAPI.loadLines(networkDef.lines)
      publicAPI.loadConnections(networkDef.connections)
    },

    /**
    Loads a list of transport stations and build corresponding graph vertices
    */
    loadStations: function (stationDef) {
      stationDef.forEach(_station => {
        const station = { ..._station }
        station.vertex = graph.addVertex(station)
        station.lines = new Set()
        stations[station.id] = station
      })
    },

    /**
    Loads a list of transport lines and build corresponding graph elements
    */
    loadLines: function (lineDef) {
      lineDef.forEach(_line => {
        const line = { ..._line, segments: [] }
        line.branches.forEach(b => {
          if (b.direction !== undefined) {
            addBranch(line, b.stations, b.direction, b.times)
          } else {
            addBranch(line, b.stations, 0, b.times)
            addBranch(line, b.stations.slice().reverse(), 1, b.times?.slice().reverse())
          }
        })
        lines[line.id] = line
      })
    },

    /**
    Loads a list of connections and build corresponding graph edges
    */
    loadConnections: function (connDef) {
      connDef.forEach(conn => {
        const inOutTimes = normalizeBiDirTime(conn.time)
        if (conn.station && conn.lineA && conn.lineB) {
          connectLinesAtStation(
            this.stationById(conn.station),
            lines[conn.lineA],
            lines[conn.lineB],
            inOutTimes
          )
        } else if (conn.stationA && conn.stationB) {
          connectStations(
            this.stationById(conn.stationA),
            this.stationById(conn.stationB),
            inOutTimes
          )
        }
      })
    },

    stationById: function (stationId) {
      return stations[stationId] || null
    },

    /**
    Perform an action on each station of the transportation network
    */
    forEachStation: function (action) {
      for (let id in stations) {
        action(stations[id])
      }
    },

    /**
    Perform an action on each line of the transportation network
    */
    forEachLine: function (action) {
      for (let id in lines) {
        action(lines[id])
      }
    },

    /**
    Compute the shortest route between two stations, using the Dijkstra algorithm
    */
    shortestRoute: function (stationFrom, stationTo, opts) {
      const search = new jkstra.algos.Dijkstra(graph)
      return search.shortestPath(
        stationFrom.vertex,
        stationTo.vertex,
        Object.assign(
          {
            shouldUpdateKey: function (prevCost, newCost, prevIncoming, newIncoming) {
              if (prevIncoming.data.explicit && !newIncoming.data.explicit) {
                return false
              }
              return newCost < prevCost
            }
          },
          opts
        )
      )
    }
  }

  return publicAPI
}

export default PTGraph
