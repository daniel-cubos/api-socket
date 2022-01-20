const { Router } = require('express');
const MessageController = require('./apps/controllers/Message');
const routes = Router();

routes.get('/health', (req, res) => res.status(200).json('Health is ok.'));

routes.get('/message', MessageController.allMessages);
routes.post('/message', MessageController.sendMessage);

module.exports = routes;