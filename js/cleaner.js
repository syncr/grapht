var rootNode = {
          "id": 2752,
          "candidateName": "Starr",
          "node_type": "candidate",
          "total": 0
      };

var clean = function(arr) {
  var results = [];
  var indexer = 100001;
  arr.forEach(function(contribution){
    results.push ({"id": indexer,
                  "node_type": "contributor",
                  "contributorName": contribution.contributor_payee,
                  "contributionAmount": contribution.amount,
                  "candidateID": contribution.filer_id
                  }
                 );
    indexer ++;
  });


  for(var i = 0; i < results.length; i++){
    if (results[i].hasOwnProperty('contributionAmount')){
      rootNode.total += results[i].contributionAmount;
      results.indexOf(results[i])
      // for(var j = 1; j < results.length; j++){
      //   if(results[i].contributorName === results[j].contributorName){
      //     results[i].contributionAmount += results[j].contributionAmount;
      //     results.splice(j,1)
        }
      }
    }
  };

   function compare(a,b) {
    if (a.contributionAmount < b.contributionAmount)
       return 1;
    if (a.contributionAmount > b.contributionAmount)
      return -1;
    return 0;
  }

  results.sort(compare);

  results = results.slice(0,10);

  for(var i = 0; i < results.length; i++){
    results[i].contributionAmount = parseFloat(results[i].contributionAmount).toFixed(2);
  };

  results.unshift(rootNode);
  return(results);
}

var edger = function(data){
  var edges = [];
  var tempNode;
  for(var i = 0; i < data.length - 1; i++){
    for(var j = 1; j < data.length; j++) {
      if(data[i].id === data[j].candidateID){
        tempNode = {
          "source": data[i].id,
          "target": data[j].id,
          "total": data[j].contributionAmount
        }
        edges.push(tempNode);
      }
    }
  }
  return edges;
}

var node_edge = function(data){
  var results = clean(data);
  var edges = edger(results);
  return {"nodes": results, "edges": edges}
};
