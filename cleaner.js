var outerResults;

var strip = function(arr) {
  var results = [];
  var indexer = 100001;
  arr.forEach(function(contribution){
    results.push ({"id": indexer,
                  "contributorName": contribution.contributor_payee,
                  "contributionAmount": contribution.amount,
                  "candidateID": contribution.filer_id
                  }
                 );
    indexer ++;
  });

  var combinedTotals = [];
  var total;

  for(var i = 0; i < results.length; i++){
    if (results[i].hasOwnProperty('contributionAmount')){
      total = results[i].contributionAmount;
      for(var j = i + 1; j < results.length; j++){
        if(results[i].contributorName === results[j].contributorName){
          results[i].contributionAmount += results[j].contributionAmount;
          results.splice(j,1)
        }
      }
    }
  };

  results.sort(function(a,b){
      return (a.contributionAmount < b.contributionAmount)
  });

  outerResults = results;

}
