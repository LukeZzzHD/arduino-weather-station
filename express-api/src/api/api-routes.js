export const getAllWeatherData = (req, res) => {
    const dummyData = {
        temperature: {
            value: 10,
            unit: 'DEGREES'
        }
    }

    res.status(200).json(dummyData);
}