const express = require('express');
const router = express.Router();
const pessoaRoute = require('../controller/pessoaController')


router.get('/teste', pessoaRoute.getUsuario);
router.put('/:id', pessoaRoute.put);
router.delete('/:id', pessoaRoute.delete);

module.exports = router;