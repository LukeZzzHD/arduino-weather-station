const SerialReader = require('../arduino/SerialReader');
const reader = new SerialReader('COM4');
reader.start();

const getAllWeatherData = (req, res) => {
    res.status(200).json(reader.data);
}

const connection = (req, res) => res.status(200).json({ connection: true });

module.exports = {
    getAllWeatherData,
	connection
}