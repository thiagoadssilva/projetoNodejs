const express = require('express');
const router = require('./routes/index');
const mustach = require('mustache-express');

const app = express();
app.use('/', router);
app.use(express.json());

app.engine('mst', mustach(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); // Pegando o caminho das paginas (VIEWS)


module.exports = app;
