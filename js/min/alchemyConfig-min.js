var vh="vh",config={dataSource:node_edge(starr),cluster:!0,graphHeight:function(){return 900},graphWidth:function(){return 900},nodeTypes:{node_type:["candidate","contributor"]},nodeCaption:function(o){return"candidate"===o.nodeType?o.properties.candidateName+": $"+o.properties.total:"contributor"===o.nodeType?o.properties.contributorName+": $"+o.properties.contributionAmount:void 0},rootNodeRadius:20,nodeRadius:function(o){return"candidate"===o.node_type?o.total/3e4:"contributor"===o.node_type?o.contributionAmount/3e3:void 0},edgeCaption:function(o){return"$"+o.total},edgeWidth:function(o,e){return 10},collisionDetection:!0,directedEdges:!0,edgeArrowSize:1,showControlDash:!0,showStats:!0,nodeStats:!0,showFilters:!0,nodeFilters:!0,captionToggle:!0,edgesToggle:!0,nodesToggle:!0,toggleRootNotes:!1,search:!0,zoomControls:!0};