const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  nome: {
    type: String,
  },
  msg: {
    type: String,
  },
  data: {
    type: Date,
    default: new Date(),
  },
});

const modelo = model('comentarios', MessageSchema);

module.exports = modelo;
