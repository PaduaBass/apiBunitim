const Patrocinador = require('../Models/Patrocinador');
const File = require('../Models/File');
const fs = require('fs');

module.exports = {
    async store(req, res) {
        try {
            const fileReq = new File(req.file);
            const file = await fileReq.save();

            const patros = await Patrocinador.find();

            const patro = new Patrocinador({
                nome: req.body.nome,
                id_file: file.id,
            });
            await patro.save();

            return res.json(patro);
        } catch (err) {
            return res.status(401).json({ error: "erro" })
        }
    },

    async index(req, res) {
        const patro = await Patrocinador.find().sort({ _id: "desc" }).populate('id_file');
        // var patrosOrdenate = []

        // patrosOrdenate.map((m, index) => {
        //     var patro = {
        //         _id: m._id,
        //         nome: m.nome,
        //         index: index,
        //         id_file: m.id_file
        //     };
        //     patro.index = index;
        //     patrosOrdenate.push(patro);
        // });

        return res.json(patro);
    },

    async destroy(req, res) {
        const idMusic = req.query.idMusic;
        const idFile = req.query.idFile;

        try {
            const patro = await Patrocinador.findByIdAndDelete(idMusic);
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