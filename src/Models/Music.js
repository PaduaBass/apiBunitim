const { Schema, model } = require('mongoose');

const musicSchema = new Schema({
    titulo: { type: String, required: true },
    compositor: { type: String, required: true },
    id_file: { type: Schema.Types.ObjectId, ref: "files" }
})

module.exports = model('musicas', musicSchema);