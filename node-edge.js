// var alch = {nodes: [{"candidate name": "name", "total amount": "amount", "id": "int"}]
// edges: [{"race name": "name", "id": "int"}]
// }

// {"candidate": name, "amount": amount, "date": date}

var ebay = "honk";
var clean = function(arr) {
  var results = [{
            "id": 0,
            "caption": "Starr",
            "role": "project",
            "node_type": "root"
        }];
  indexer = 1;
  arr.forEach(function(contribution){
    results.push ({"id": indexer,
             "tran_date": contribution.tran_date,
             "contributor_payee": contribution.contributor_payee,
             "amount": contribution.amount,
             "candidate": "Bruce Starr"});
  indexer ++;
  });
  return results;
};


var contribs = function(arr) {
  var contrib_names = {};
  arr.forEach(function(record){
    contrib_names[record.contributor_payee] = 0;
  });
  arr.forEach(function(record){
    contrib_names[record.contributor_payee] += record.amount;
  });

  return contrib_names;
};

var nodeFormat = function(contributors){
  var indexer = 1;
  var results = [{
            "id": 0,
            "caption": "Starr",
            "role": "project",
            "root": true
        }];
  for (var k in contributors){
    if (contributors.hasOwnProperty(k)) {
         results.push({"donor": k,
                       "total": contributors[k],
                       "id": indexer
                       });
    }
    indexer ++;
  }
  return results;
};

var edgeFormat = function(arr){
  var results = [];
  for(var i = 1; i < arr.length; i++) {
    results.push( {"source": 0,
                  "target": arr[i].id,
                  "total": arr[i].total
                  }
    );
  }
  return results;
};
