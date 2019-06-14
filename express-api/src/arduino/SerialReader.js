const SerialPort = process.env.NODE_ENV == 'production' ? 
    require('serialport') : 
    require('virtual-serialport');
	
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SerialReader {
    constructor (portName) {
        this.data = null;
        this.port = new SerialPort(portName, {
            baudRate: 9600
        });
        
        if (process.env.NODE_ENV == 'production') {
            const Readline = require('@serialport/parser-readline');
            const parser = this.port.pipe(new Readline({ delimiter: '\n' }));
            parser.on('data', data => {
                this.data = {
					...JSON.parse(data),
					date: new Date()
				}
            });
        } else {
            this.port.on('data', data => {
                this.data = {
					...JSON.parse(data),
					date: new Date()
				}
            });
        }

        this.port.on('open', err => {
            err 
                ? console.error(err)
                : console.log(`Port ${portName} has been opened in ${process.env.NODE_ENV} mode`);
        });
    }

    start () {
        if (process.env.NODE_ENV == 'development') {
            this.port.on('dataToDevice', data => this.port.writeToComputer(data));
            setInterval(() => {
                this.port.write(
                    JSON.stringify({
                        temperature: getRandomInt(-20, 50),
                        humidity: getRandomInt(1, 100),
                        light: getRandomInt(1, 1024)
                    })
                );
            }, 2000);
        }
    }
}

module.exports = SerialReader;