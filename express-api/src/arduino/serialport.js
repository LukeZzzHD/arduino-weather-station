const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

var arduinoPort = new SerialPort('COM3', {
	autoOpen: false,
	dataBits: 8,
	stopBits: 1,
	baudRate: 9600
});

arduinoPort.pipe(new Readline());

arduinoPort.open(err => {
	err ? console.error(err) : console.log('opened port COM3');
});

//arduinoPort.on('data', data => console.log('Data: ', data));

var text = '';

arduinoPort.on('data', data => text += data.toString());

setTimeout(() => {
	arduinoPort.close(err => console.error(err));
}, 1000);

arduinoPort.on('close', () => {
	console.log('Text: ', text);
});