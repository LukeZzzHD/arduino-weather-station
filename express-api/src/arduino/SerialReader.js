const SerialPort = process.env.NODE_ENV == 'production' ? 
    require('serialport') : 
    require('virtual-serialport');

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
                this.data = JSON.parse(data);
            });
        } else {
            this.port.on('data', data => {
                this.data = JSON.parse(data);
            });
        }

        this.port.on('open', err => {
            err 
                ? console.error(err)
                : console.log(`Port ${portName} has been opened id ${process.env.NODE_ENV} mode`);
        });
    }

    start () {
        if (process.env.NODE_ENV == 'development') {
            this.port.on('dataToDevice', data => this.port.writeToComputer(data));
            const rand = () => Math.round(Math.random() * 100) - 50;
            setInterval(() => {
                this.port.write(
                    JSON.stringify({
                        temperature: rand(),
                        humidity: rand(),
                        light: rand()
                    })
                );
            }, 1000);
        } else {
            this.port.open();
        }
    }
}

module.exports = SerialReader;