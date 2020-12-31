const { model, Schema } = require('mongoose');

const contatoSchema = new Schema({
    nome: String,
    telefone: String,
    whatsapp: Number,
});

module.exports = model('contatos', contatoSchema);