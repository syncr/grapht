// reduce down to top ten
// adds total per contributors

describe("clean", function() {
  it("shows only top ten contributors plus candidate", function() {
    clean(test_data).length.should.equal(11);
  });
  it("consolidates contributors with same name", function() {
    clean(test_data2).length.should.equal(2);
  });
});
