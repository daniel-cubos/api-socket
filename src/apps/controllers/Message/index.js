const messages = require('../../../messages');
const { v4 } = require('uuid')

function allMessages(req, res) {

  return res.status(202).json({ messages });
}

function sendMessage(req, res) {
  const { message } = req.body;

  messages.push({
    id: v4(),
    message: message
  });

  req.socket.emit('front-messages', { messages });

  return res.status(201).json({ messages });
}

module.exports = {
  allMessages,
  sendMessage
}