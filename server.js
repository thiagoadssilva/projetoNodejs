const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});
app.set('port', process.env.PORT || 7777);

// - Configuração a conexão com o banco de dados.
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.error("ERROR ->" + error.message);
});

const server = app.listen(app.get('port'), () => {
    console.log(server.address().port);
});

