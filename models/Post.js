const mongoose = require('mongoose'); // O mongose é reposável pela conxeção com bando de dados.
mongoose.Promise = global.Promise; // Atualizando a forma de usar o mongose.

const slug = require('slug');

// - INICIO da estrutura do schema do bando (tabela)
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:'Campo post é obrigatório'
    },
    slug:String,
    body:{
        type:String,
        trim:true
    },
    tags:[String]
});
// - FIM da estrutura do schema do bando (tabela)

// - INICIO estamos fazendo o tratamento, antes de salvar para criar a url
postSchema.pre('save', function(next){
    if(this.isModified('title')){ // - Condição para saber se o titulo foi alterado
        this.slug = slug(this.title, {lower:true});
    }
    next();
});
// - FIM estamos fazendo o tratamento, antes de salvar para criar a url

//- Fazendo a chamada do mongoBd
module.exports = mongoose.model('Post', postSchema);