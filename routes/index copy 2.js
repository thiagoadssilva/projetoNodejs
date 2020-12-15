const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
    res.render('home', {
        nome: req.query.nome,
        idade: req.query.idade,
        validacao: true,
        ingredientes:[
            {nome: 'Arroz', qt: '20g'},
            {nome: 'Macarrão', qt: '1g'}
        ]
    });
});

 
module.exports = router;