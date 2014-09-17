// var alch = {nodes: [{"candidate name": "name", "total amount": "amount", "id": "int"}]
// edges: [{"race name": "name", "id": "int"}]
// }

// {"candidate": name, "amount": amount, "date": date}

// var clean = function(arr) {
//   var results = [{
//             "id": 0,
//             "caption": "Starr",
//             "role": "project",
//             "node_type": "root",
//             "candidateID": 2752
//         }];
//   indexer = 1001;
//   arr.forEach(function(contribution){
//     results.push ({"id": indexer,
//              "contributorName": contribution.contributor_payee,
//              "contributionAmount": contribution.amount,
//              "candidateID": contribution.filer_id});
//   indexer ++;
//   });
//   return results;
// };


// var contribs = function(arr) {
//   var contrib_names = {};
//   arr.forEach(function(record){
//     contrib_names[record.contributor_payee] = 0;
//   });
//   arr.forEach(function(record){
//     contrib_names[record.contributor_payee] += record.amount;
//   });

//   return contrib_names;
// };

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
         results.push({"contributor": k,
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
