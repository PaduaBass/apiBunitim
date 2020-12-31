const Foto = require('../Models/Foto');

module.exports = {

    async store(req, res) {

        const foto = new Foto(req.body);
        console.log(req.body);
        await foto.save();
        return res.json(foto);
    },

    async index(req, res) {
        const fotos = await Foto.find();

        return res.json(fotos);
    },

    async destroy(req, res) {
        const foto = await Foto.findByIdAndDelete(req.query.idFoto);

        return res.json({ menssage: "foto removida" });
    }

}