const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const http = require('http');
const socket = require('./services/socket');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

socket(server);

app.request.socket = socket;

module.exports = server;

