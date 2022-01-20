const { Router } = require('express');

const routes = Router();

routes.get('/health', (req, res) => res.status(200).json('Health is ok.'));

module.exports = routes;