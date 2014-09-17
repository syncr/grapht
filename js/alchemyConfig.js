var config = {
  dataSource: node_edge(starr),

  cluster: true,

  nodeTypes: {"node_type":
                [
                 "candidate",
                 "contributor"
                ]
               },
  nodeCaption: function(n) {
    if(n.nodeType === "candidate") {
      return n.properties.candidateName
      // + ": $" + n.properties.contributionAmount
    } else if (n.nodeType === "contributor") {
      return n.properties.contributorName + ": $" + n.properties.contributionAmount
    }
  },

  rootNodeRadius: 20,

  nodeRadius: function(n) {
    if(n.node_type === "candidate") {
      return (30)
    } else if (n.node_type === "contributor") {
      return (n.contributionAmount / 3000)
    }
  },

  edgeCaption: function(e) {
    return "$" + e.total
  },

  edgeWidth: function(e, i) {
    return (e.total * .0005)
  },

  collisionDetection: true,

  directedEdges: true,
  edgeArrowSize: 1,

  showControlDash: true,

  showStats: true,
  nodeStats: true,

  showFilters: true,
  nodeFilters: true,

  captionToggle: true,
  edgesToggle: true,
  nodesToggle: true,
  toggleRootNotes: false,

  search: true,

  zoomControls: true
};
