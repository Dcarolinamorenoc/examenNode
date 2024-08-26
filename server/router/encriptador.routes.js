const express = require('express');
const router = express.Router();
const { encriptarTexto, desencriptarTexto } = require("../controllers/encriptadroController");

router.post('/encriptar', encriptarTexto);
router.post('/desencriptar', desencriptarTexto);

module.exports = router;