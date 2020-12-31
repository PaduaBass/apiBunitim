const { model, Schema } = require('mongoose');

const agendaSchema = new Schema({
    titulo: String,
    descricao: String,
    estado: String,
    cidade: String,
    localidade: String,
    data: Date,
    link: String,
});

module.exports = model('agenda', agendaSchema);