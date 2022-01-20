const messages = require('../../../messages');
const { v4 } = require('uuid')

function allMessages(req, res) {

  return res.status(202).json(messages);
}

function sendMessage(req, res) {
  const { message } = req.body;
  const newMessage = {
    id: v4(),
    message: message
  }

  messages.push(newMessage);

  return res.status(201).json(messages);
}

module.exports = {
  allMessages,
  sendMessage
}