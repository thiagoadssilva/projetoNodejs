const express = require('express');
const router = require('./routes/index');
const helpers = require('./helpers'); // Arquivo onde fica os valores padrões de todo PROJETO. 
const mustach = require('mustache-express');
const errorHandler = require('./handlers/errorHandler'); // Arquivo responsável por lidar com os erros
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

//Configurações Basicas
const app = express();

// - INICIO do MidlleWare Global
app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
});
// - FIM do MidlleWare Global

// - INICIO do comando que vai pegar o envio das pagina no metodo POST em formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));// Trantando o que está vindo pela URL
// - FIM do comando que vai pegar o envio das pagina no metodo POST em formato JSON

// - Inicio para ultilização das mensagem na tela
app.use(cookieParser(process.env.SECRET));
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
// Fim para ultilização das mensagem na tela 

// Inicio do midleWare que vai deixar algumas variaveis ou funções diponivel globalmente
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash(); // Deixando as mensagem globalmente.
    next();
});
// FIM do midleWare que vai deixar algumas variaveis ou funções diponivel globalmente

app.use('/', router); // Definições da rota
app.use(errorHandler.notFound);

// - INICIO da ultilização do mustache
app.engine('mst', mustach(__dirname + '/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); // Pegando o caminho das paginas (VIEWS)
// - FIM da ultilização do mustache

module.exports = app;
