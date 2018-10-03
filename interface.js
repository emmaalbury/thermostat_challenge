$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#power-saving-on').click(function() {
    thermostat.flipPowerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#power-saving-off').click(function() {
    thermostat.flipPowerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
