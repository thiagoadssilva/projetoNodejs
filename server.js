const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});


// - Configuração a conexão com o banco de dados.
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.error("ERROR ->" + error.message);
});

//- Fazendo o carregamento dos models
require('./models/Post');

const app = require('./app');
app.set('port', process.env.PORT || 7777 );
const server = app.listen(app.get('port'), () => {
    console.log(server.address().port);
});

