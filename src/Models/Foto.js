const { model, Schema } = require('mongoose');

const fotoSchema = new Schema({
    link: String,
});

module.exports = model('fotos', fotoSchema);