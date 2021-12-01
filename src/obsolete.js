/**
    Split the route into sections.
    A section = path along the same line in the same direction (no connection) 
          OR    one or more consecutive connection edges.
    */
          buildRoadmap: function (edges, edgeCost) {
            var sections = []
            var totalTime = 0
            if (edges && edges.length > 0) {
              var e
              var section = null
              var prevType = null,
                prevConnection = null,
                prevLine = null
              var eTime
              for (var i = 0, l = edges.length; i < l; i++) {
                e = edges[i]
      
                if (e.data.type != 'connection') {
                  if (prevType == 'connection') {
                    // end previous connection section
                    section.terminus = e.data.terminus
                    section.to = {
                      station: e.from.data.station,
                      line: e.data.line
                    }
                    prevConnection = section
                    // start a new line section
                    section = {
                      type: e.data.type,
                      line: e.data.line,
                      stations: [],
                      time: 0
                    }
                    sections.push(section)
                  }
                  section.terminus = prevConnection.terminus = e.data.terminus
                  // in any case, complete the list of the section's stations
                  section.stations.push(e.from.data.station)
                  prevLine = e.data.line
                } else {
                  // start or continue a connection section
                  if (prevType != 'connection') {
                    if (section != null) {
                      section.stations.push(e.from.data.station)
                    }
      
                    section = {
                      type: 'connection',
                      from: null,
                      to: null,
                      time: 0
                    }
                    sections.push(section)
                    if (prevLine != null) {
                      section.from = {
                        station: e.from.data.station,
                        line: prevLine
                      }
                    }
                  }
                }
      
                prevType = e.data.type
                eTime = edgeCost(e, totalTime)
                section.time += eTime
                totalTime += eTime
              }
            }
            return {
              sections: sections,
              time: totalTime
            }
          }


  /**
  Assigns an array of terminus stations to each edge of a line.
  TODO: optimize (no queue? Find the terminus first, then walk upstream)
  TODO: adapt to circling lines (ex: Berlin. No terminus, the queue loop would be infinite!)
  */
  function compileTerminusStations(line) {
    const edgeQueue = line.segments.slice() // work on a queue of line's edges
    let edge, nextEdges, stop
    // dequeue edges one by one
    while ((edge = edgeQueue.shift())) {
      stop = edge.to
      // find outgoing incident edges of the same line
      nextEdges = graph.outEdges(stop, function (e) {
        return e.data.line == line
      })
      // if none is found, the station is a terminus,
      // assign it to the edge
      if (nextEdges.length == 0) {
        edge.data.terminus = [stop.data.station]
      } else {
        // else, use terminus information of incident edges.
        // If multiple edges: branching case, all of them need a terminus.
        var nextTerminus = []
        for (var i = 0; i < nextEdges.length; i++) {
          if (nextEdges[i].data.hasOwnProperty('terminus')) {
            nextTerminus = nextTerminus.concat(nextEdges[i].data.terminus)
          } else {
            nextTerminus = null
            break
          }
        }
        if (!nextTerminus) {
          // some edges didn't have the information
          // re-enqueue the current edge to try later
          edgeQueue.push(edge)
        } else {
          edge.data.terminus = nextTerminus
        }
      }
    }
  }