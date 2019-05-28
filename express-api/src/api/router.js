const router = require('express').Router();
const { getAllWeatherData, connection } = require('./api-routes');

router.get('/weather', getAllWeatherData);
router.get('/connection', connection);

module.exports = router;