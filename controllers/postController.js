const mongoose = require('mongoose'); // - Estabelecendo a conexção com banco de dados
const Post = mongoose.model('Post'); // - Estanciando o model dos posts
const slug = require('slug');

// - INICIO da chamada do arquivo da pagina de adicionar os post.
exports.add = (req, res) => {
  res.render('postAdd');
};
// - FIM da chamada do arquivo da pagina de adicionar os post.

// - INICIO da ação de envio dos dados através da requisição POST
exports.addAction = async (req, res) => {
  //res.json(req.body);
  const post = new Post(req.body);// Usamos o req.body, porque a requisição está sendo feita com o metodo POST

  try {
    await post.save();
  } catch (error) {
    req.flash('error', 'Error: ' + error.message);
    return res.redirect('/post/add');
  }

  req.flash('success', 'Post adicionado com sucesso!!');
  res.redirect('/');
};
// - FIM da ação de envio dos dados através da requisição POST

exports.edit = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.render('postEdit', { post });
}

exports.editAction = async (req, res) => {
  req.body.slug = slug(req.body.title, { lower: true });
  
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
  } catch (error) {
    req.flash('error', 'Error: ' + error.message);
    return res.redirect('/post/'+ req.params.slug +'/edit');
  }


  req.flash('success', 'Post Atualizado com sucesso!!');
  res.redirect('/');
}