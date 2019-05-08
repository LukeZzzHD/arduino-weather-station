const router = require('express').Router();
const { getAllWeatherData } = require('./api-routes');

router.get('/weather', getAllWeatherData);

module.exports = router;