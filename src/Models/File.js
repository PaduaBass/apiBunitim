const { model, Schema } = require('mongoose');

const fileSchema = new Schema({
    fieldname: String,
    originalname: String,
    enconding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
})

module.exports = model('files', fileSchema);