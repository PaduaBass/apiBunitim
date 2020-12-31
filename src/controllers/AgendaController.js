const Agenda = require('../Models/Agenda');


module.exports = {
    async store(req, res) {
        const agenda = new Agenda(req.body);

        await agenda.save();

        return res.json(agenda);
    },

    async index(req, res) {
        const agenda = await Agenda.find();

        return res.json(agenda);
    },

    async destroy(req, res) {
        const agenda = await Agenda.findByIdAndDelete(req.query.idEvento);
        console.log(agenda)
        return res.json({ menssage: "Evento Removido!" });
    }
}