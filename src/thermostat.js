function Thermostat() {
}

Thermostat.prototype.temperature = 20
Thermostat.prototype.powerSaving = "on"
Thermostat.prototype.DEFAULT_TEMPERATURE = 20

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
  if (this.powerSaving == 'on') {
    if(this.temperature > 25) {
      this.temperature = 25
    }
  }
  else {
    if(this.temperature > 32) {
      this.temperature = 32
    }
  }
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

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) {
    return 'low-usage'
  }
  else if(this.temperature < 25) {
    return 'medium-usage'
  }
  else {
    return 'high-usage'
  }
}
