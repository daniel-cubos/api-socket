const { Router } = require('express');

const routes = Router();

routes.get('/health', (req, res) => res.json('Health is ok.'));

module.exports = routes;