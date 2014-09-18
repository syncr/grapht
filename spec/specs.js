// reduce down to top ten
// adds total per contributors

describe("clean", function() {
  it("adds candidate sum of contributions", function() {
    clean(test_data2)[0].total.should.equal('325.00');
  });
  it("shows only top ten contributors plus candidate", function() {
    clean(test_data).length.should.equal(11);
  });
  it("consolidates contributors with same name", function() {
    clean(test_data2).length.should.equal(2);
  });
  it("consolidates contributionAmount per contributor", function() {
    clean(test_data2)[1].contributionAmount.should.equal('325.00');
  });
  it("orders by contributionAmount", function() {
    (parseInt(clean(test_data)[1].contributionAmount) > parseInt(clean(test_data)[2].contributionAmount)).should.equal(true);
  });
  it("adds candidate to front of returned array", function() {
    clean(test_data)[0].node_type.should.equal("candidate");
  });
});

describe("edger", function() {
  it("adds candidate node to edge", function() {
    edger(clean(test_data))[0].source.should.equal(clean(test_data)[0].id)
  });
  it("adds contributor nodes to edge", function() {
    edger(clean(test_data))[0].target.should.equal(clean(test_data)[1].id)
  });
  it("adds contributionAmount to edge", function() {
    edger(clean(test_data))[0].total.should.equal(clean(test_data)[1].contributionAmount)
  });
});

describe("node_edge", function() {
  it("adds nodes to node_edge", function() {
    node_edge(test_data).nodes.length.should.equal(11)
  });
  it("adds edges to node_edge", function() {
    node_edge(test_data).edges.length.should.equal(10)
  });
});
