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
