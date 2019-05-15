var SerialPort;
if (process.env.NODE_ENV == 'production') {
	SerialPort = require('serialport');
} else {
	SerialPort = require('virtual-serialport');
}
const { PORTNAME } = require('./config');

const portName = PORTNAME || process.env.PORTNAME || 'COM1';

const port = new SerialPort(portName, {
	baudRate: 9600
});

if (process.env.NODE_ENV == 'production') {
	const Readline = require('@serialport/parser-readline');
	const parser = port.pipe(new Readline({ delimiter: '\n' }));
	parser.on('data', data => {
		console.log('Parser got Data: ', data);
	});
} else {
	port.on('data', data => console.log('Data: ', data));
}

port.on('open', err => {
	err
		? console.error(err)
		: console.log(
				'Port ' + portName + ' has been opened, mode: ' + process.env.NODE_ENV
		  );
});

if (process.env.NODE_ENV == 'development') {
	port.on('dataToDevice', data => port.writeToComputer(data));
	const rand = () => Math.round(Math.random() * 100) - 50;
	setInterval(
		port.write(
			JSON.stringify({
				temperature: rand(),
				humidity: rand(),
				light: rand()
			})
		)
	);
}
