const { Schema, model } = require('mongoose');

const patrocinadorSchema = new Schema({
    nome: { type: String, required: true },
    id_file: { type: Schema.Types.ObjectId, ref: "files" }
})

module.exports = model('patrocinadores', patrocinadorSchema);