const express = require('express');
const router = require('./routes/index');
const helpers = require('./helpers');
const mustach = require('mustache-express');
const app = express();

app.use((req, res, next) =>{
    res.locals.h = helpers;
    next();
}); 


app.use(express.json());
app.use('/', router);

app.engine('mst', mustach(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); // Pegando o caminho das paginas (VIEWS)


module.exports = app;
