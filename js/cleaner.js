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

  function compare_by_name(a,b) {
    if (a.contributorName < b.contributorName)
       return 1;
    if (a.contributorName > b.contributorName)
      return -1;
    return 0;
  }

  results.sort(compare_by_name);
  rootNode.total += results[0].contributionAmount
  for(var i = 1; i < results.length; ){
    rootNode.total += results[i].contributionAmount;
    if(results[i-1].contributorName === results[i].contributorName){
        results[i-1].contributionAmount += results[i].contributionAmount;
        results.splice(i, 1);
    } else {
        i++;
    }
  }

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

  rootNode.total = parseFloat(rootNode.total).toFixed(2);

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
