describe("FizzBuzz", function() {
  var fb;

  beforeEach(function() {
    fb = new FizzBuzz();
  });

  it("should return 'fizz' if the number is 3", function() {
    expect(fb.fizzbuzz(3)).toEqual('fizz');
  });

  it("should return 'buzz' if the number is 5", function() {
    expect(fb.fizzbuzz(5)).toEqual('buzz');
  });

  it("should return 'fizzbuzz' if the number is 210", function() {
    expect(fb.fizzbuzz(210)).toEqual('fizzbuzz');
  })

  it("should return the number passed otherwise", function() {
    expect(fb.fizzbuzz(32891038)).toEqual(32891038);
  })
});
