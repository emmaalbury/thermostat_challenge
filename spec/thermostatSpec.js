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
    expect(ts.powerSaving).toEqual(true)
  });

  it("Should be able to turn off power saving", function() {
    ts.flipPowerSavingOff()
    expect(ts.powerSaving).toEqual(false)
  });

  it("Shouldn't increase temperature past 25 if powerSaving is on", function() {
    var step;
    for (step = 0; step < 6; step++) {
      ts.increaseTemp()
    }
    expect(ts.temperature).toEqual(25)
  });

  it("Shouldn't increase temperature past 32 if powerSaving is off", function() {
    ts.flipPowerSavingOff()
    var step;
    for (step = 0; step < 13; step++) {
      ts.increaseTemp()
    }
    expect(ts.temperature).toEqual(32)
  });

  it("Should be able to reset the temperature to 20", function() {
    ts.increaseTemp()
    ts.resetTemp()
    expect(ts.temperature).toEqual(20)
  });

  it("knows when it has a medium energy usage", function() {
    expect(ts.energyUsage()).toEqual("medium-usage")
  });

  it("knows when it has a low energy usage", function() {
    var step;
    for (step = 0; step < 3; step++) {
      ts.decreaseTemp()
    }
    expect(ts.energyUsage()).toEqual("low-usage")
  });

  it("knows when it has a high energy usage", function() {
    var step;
    for (step = 0; step < 5; step++) {
      ts.increaseTemp()
    }
    expect(ts.energyUsage()).toEqual("high-usage")
  });

});
