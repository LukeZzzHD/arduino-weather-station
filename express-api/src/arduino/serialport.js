const SerialPort = require('serialport');

var arduinoPort = new SerialPort('COM3', {
	autoOpen: false,
	dataBits: 8,
	stopBits: 1,
	baudRate: 9600
}, false);

arduinoPort.open(err => {
	err ? console.error(err) : console.log('opened port COM3');
});

arduinoPort.on('data', data => console.log('Data: ', data));

/* { comName: 'COM3',
    manufacturer: 'Microsoft',
    serialNumber: '7553334343635141C071',
    pnpId: 'USB\\VID_2341&PID_0043\\7553334343635141C071',
    locationId: 'Port_#0006.Hub_#0003',
    vendorId: '2341',
    productId: '0043' } */