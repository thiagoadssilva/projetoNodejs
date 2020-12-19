const express = require('express');
const router = require('./routes/index');
const helpers = require('./helpers');
const mustach = require('mustache-express');
const errorHandler = require('./handlers/errorHandler');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

//midlleWare
app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
});

app.use(express.json()); //Para pegar as requisição que é enviada pelo metodo post
app.use(express.urlencoded({extended:true}));

/** Inicio para ultilização das mensagem na tela */
app.use(cookieParser(process.env.SECRET));
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
/** Fim para ultilização das mensagem na tela */

/** Inicio do midleWare que vai deixar algumas variaveis ou funções diponivel globalmente */
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash(); // Deixando as mensagem globalmente.
    next();
});
/** Inicio do midleWare que vai deixar algumas variaveis ou funções diponivel globalmente */

app.use('/', router); // Definições da rota
app.use(errorHandler.notFound);

app.engine('mst', mustach(__dirname + '/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); // Pegando o caminho das paginas (VIEWS)

module.exports = app;
