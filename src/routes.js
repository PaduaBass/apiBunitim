const { Router } = require('express');
const MusicController = require('./controllers/MusicController');
const FileController = require('./controllers/FileController');
const FotoController = require('./controllers/FotoController');
const ContatoController = require('./controllers/ContatoController');
const PatrocinadorController = require('./controllers/PatrocinadorController');
const AgendaController = require('./controllers/AgendaController');
const multer = require('multer');
const config = require('./config/upload');


const routes = Router();

const upload = multer(config);

routes.get('/', (req, res) => {
    return res.json({ menssage: "hello" });
})


routes.post('/music', upload.single('file'), MusicController.store);

routes.get('/musics', MusicController.index);

routes.delete('/music', MusicController.destroy);


routes.post('/file', upload.single('file'), FileController.store);


routes.post('/foto', FotoController.store);

routes.get('/fotos', FotoController.index);

routes.delete('/foto', FotoController.destroy);



routes.post('/contato', ContatoController.store);

routes.get('/contatos', ContatoController.index);

routes.delete('/contato', ContatoController.destroy);



routes.post('/patrocinador', PatrocinadorController.store);

routes.get('/patrocinadores', PatrocinadorController.index);

routes.delete('/patrocinador', PatrocinadorController.destroy);


routes.post('/evento', AgendaController.store);

routes.get('/eventos', AgendaController.index);

routes.delete('/evento', AgendaController.destroy);

module.exports = routes;