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

  it("should decrease temperature after the down function is called", function() {
    ts.decreaseTemp()
    expect(ts.temperature).toEqual(19)
  });

  it("should not reduce temperature below 10", function() {
    var step;
    for (step = 0; step < 11; step++) {
      ts.decreaseTemp();
    }
    expect(ts.temperature).toEqual(10)
  });

  it("Has power saving mode on by default", function() {
    expect(ts.powerSaving).toEqual("on")
  });

  it("Should be able to turn off power saving", function() {
    ts.flipPowerSaving()
    expect(ts.powerSaving).toEqual("off")
  });
});
