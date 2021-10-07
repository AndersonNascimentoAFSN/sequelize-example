require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const router = require('../routes');

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/users', router.UserRoutes);

module.exports = app;