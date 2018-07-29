/* eslint-disable no-console */
const Transmitter = require('..');

const id = process.argv[2];
const getMessages = () => [{
  date: Date(),
  type: 'BatteryStatus',
}];
const transmitter = new Transmitter(id, getMessages);

transmitter.on('glucose', glucose => console.log(`got glucose: ${glucose.glucose}, filtered: ${glucose.filtered}, unfiltered: ${glucose.unfiltered}`));
transmitter.on('calibrationData', calibration => console.log(`got calibrationData: ${calibration}`));
transmitter.on('batteryStatus', status => console.log(`battery status: ${status.status}, voltagea: ${status.voltagea}, voltageb: ${status.voltageb}`));

transmitter.on('disconnect', process.exit);
