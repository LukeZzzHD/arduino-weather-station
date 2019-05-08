const express = require('express');
const router = require('./api/router');
const { PORT } = require('./config');
const app = express();

app.use('/api', router);
app.get('/', (req, res) => {
    res.status(200).send(`
    You reached our express-weather-api
    Goto /api/info to learn more
    `);
});

app.listen(PORT, err => {
    err ? console.error(err) : console.log(`Listening for requests on port ${PORT}`);
});