const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const mongoConnect = mongoose.connect(
    'mongodb+srv://root:root@cluster0.3renw.mongodb.net/bunitim?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }
)

app.use(express.json());

app.use(cors());

app.use(routes);



app.listen(3333);