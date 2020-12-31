const File = require('../Models/File');
const Music = require('../Models/Music');
const { store } = require('./MusicController');

module.exports = {
    async store(req, res) {
        const id_music = req.query.id;
        const fileReq = new File(req.file);
        const file = await fileReq.save();
        const music = await Music.findById(id_music);
        music.id_file = file.id;
        await music.save();
        return res.json(music)
    },

    async index(req, res) {
        const files = await File.find();

        return res.json(files);
    }
}