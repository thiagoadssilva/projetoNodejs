const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'}); // Fazendo o carregamento das variaveis do arquivo ENV


// - INICIO - Configuração para conexão com o banco de dados.
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.error("ERROR ->" + error.message);
});
// - FIM - Configuração para conexão com o banco de dados.

// - INICIO Fazendo o carregamento dos models
require('./models/Post');
// - FIM Fazendo o carregamento dos models

const app = require('./app'); // - Aqui estamos carregando o aplicativo.

app.set('port', process.env.PORT || 7777 );
const server = app.listen(app.get('port'), () => {
    console.log(server.address().port);
});

