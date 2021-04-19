const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.index = async (req, res) => {
    let responseJson = {// Variavel que vai conter o retorno da base de dados.
        pageTitle: "Thiago jose",
        posts:[]
    };
    
    const posts = await Post.find(); // Aqui estamos pegando todas as informações da base dados
    responseJson.posts = posts; // Aqui estamos atribuindo o retorno do função find()
    
    res.render('home', responseJson); // Redirecionando com as informações da base.
};