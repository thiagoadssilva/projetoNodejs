const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Thiago jose da silva');
});
router.get('/sobre', (req, res) => {
    res.send('thiago jose da silva sobre');
});

module.exports = router;