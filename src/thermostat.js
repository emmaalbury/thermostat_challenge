function Thermostat() {
}

Thermostat.prototype.temperature = 20
Thermostat.prototype.powerSaving = "on"

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
}

Thermostat.prototype.decreaseTemp = function () {
  this.temperature -= 1;
  if(this.temperature < 10) {
    this.temperature = 10;
  }
}

Thermostat.prototype.flipPowerSaving = function () {
  if (this.powerSaving == "on") {
    this.powerSaving = "off";
  }
  else {
    this.powerSaving = "on";
  }
}
