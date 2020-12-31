const Music = require('../Models/Music');
const File = require('../Models/File');
const fs = require('fs');

module.exports = {
    async store(req, res) {
        try {
            const fileReq = new File(req.file);
            const file = await fileReq.save();

            const musicas = await Music.find();

            const music = new Music({
                titulo: req.body.titulo,
                compositor: req.body.compositor,
                id_file: file.id,
            });
            await music.save();

            return res.json(music);
        } catch (err) {
            return res.status(401).json({ error: "erro" })
        }
    },

    async index(req, res) {
        const musicas = await Music.find().sort({ _id: "desc" }).populate('id_file');
        var musicasOrdenate = []

        musicas.map((m, index) => {
            var music = {
                _id: m._id,
                titulo: m.titulo,
                index: index,
                compositor: m.compositor,
                id_file: m.id_file
            };
            music.index = index;
            musicasOrdenate.push(music);
        });

        return res.json(musicasOrdenate);
    },

    async destroy(req, res) {
        const idMusic = req.query.idMusic;
        const idFile = req.query.idFile;

        try {
            const music = await Music.findByIdAndDelete(idMusic);
            const file = await File.findByIdAndDelete(idFile);

            fs.stat(file.path, function(err, stats) {
                console.log(stats); //here we got all information of file in stats variable

                if (err) {
                    return console.error(err);
                }

                fs.unlink(file.path, function(err) {
                    if (err) return console.log(err);
                    console.log('file deleted successfully');
                });
            });

            return res.json({ menssage: "Musica removida" })
        } catch (e) {
            return res.status(401).json({ error: "não foi possivel remover a musica" })
        }

    }
}