const getAllWeatherData = (req, res) => {

    const rand = () => Math.floor(Math.random() * 100);

    const dummyData = {
        temperature: rand(),
        humidity: rand(),
        light: rand()
    }

    res.status(200).json(dummyData);
}

module.exports = {
    getAllWeatherData
}