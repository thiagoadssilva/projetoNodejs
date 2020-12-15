const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Meu nome é: ' + req.query.nome + ' idade: ' + req.query.idade);
    res.json(req.query);
});
router.get('/sobre', (req, res) => {
    res.send('thiago jose da silva sobre');
});
router.get('/post/:id', (req, res) =>{
    let id = req.params.id;
    res.send('Post id --' + id);
});

module.exports = router;