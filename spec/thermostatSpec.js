describe("Thermostat", function() {
  var ts;

  beforeEach(function() {
    ts = new Thermostat();
  });

  it("should have a starting temperature of 20 degrees", function() {
    expect(ts.temperature).toEqual(20)
  });

  it("should increase temperature after the up function is called", function() {
    ts.increaseTemp()
    expect(ts.temperature).toEqual(21)
  });
});
