
describe("Test Power Function", function() {


  describe("Happy Path Testing =>  Raises x to power n", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(power(x, 3), expected);
      });
    }
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
//====   Exception Testing

describe("Exception Tests => ", function() {
  it("for negative n the result is NaN", function() {
    assert.isNaN(power(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(power(2, 1.5));
  });
});
});
