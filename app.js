const express = require('express');
const router = require('./routes/index');
const helpers = require('./helpers');
const mustach = require('mustache-express');
const errorHandler = require('./handlers/errorHandler');
const app = express();
 
//midlleWare
app.use((req, res, next) =>{
    res.locals.h = helpers;
    next();
}); 

app.use(express.json()); //Para pegar as requisição que é enviada pelo metodo post
app.use('/', router); // Definições da rota
app.use(errorHandler.notFound);

app.engine('mst', mustach(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); // Pegando o caminho das paginas (VIEWS)

module.exports = app;
