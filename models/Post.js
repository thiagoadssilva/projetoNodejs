const mongoose = require('mongoose');
const slug = require('slug');
mongoose.Promise = global.Promise;

//- Criando o schema do bando (tabela)
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

//- Aqui estamos fazendo o tratamento, antes de salvar para criar a url
postSchema.pre('save', function(next){
    if(this.isModified('title')){
        this.slug = slug(this.title, {lower:true});
    }
    next();
});

//- Fazendo a chamada do mongoBd
module.exports = mongoose.model('Post', postSchema);