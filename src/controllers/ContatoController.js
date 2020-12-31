const Contato = require('../Models/Contato');


module.exports = {
    async store(req, res) {
        const contato = new Contato(req.body);

        await contato.save();

        return res.json(contato);
    },

    async index(req, res) {
        const contatos = await Contato.find();

        return res.json(contatos);
    },

    async destroy(req, res) {
        const contato = await Contato.findByIdAndDelete(req.query.idContato);

        return res.json({ menssage: "Contato removido!" });
    }
}