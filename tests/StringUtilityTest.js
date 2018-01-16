describe("String Utility Tests => ", function() {

  describe("Happy Paths => ", function() {
    it("test should be converted TEST", function() {
      assert.equal(toUpper("test"), "TEST");
    });
  });

  describe("Exception Paths => ", function() {
    it("Should return NaN", function() {
      assert.isNaN(toUpper(), NaN);
    });
  });

});
