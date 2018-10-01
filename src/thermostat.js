function Thermostat() {
}

Thermostat.prototype.temperature = 20

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
}
