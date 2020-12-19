const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//- Criando o schema do bando (tabela)
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:'Campol post é obrigatório'
    },
    slug:String,
    body:{
        type:String,
        trim:true
    },
    tags:[String]
});

//- Fazendo a chamada do mongoBd
module.exports = mongoose.model('Post', postSchema);