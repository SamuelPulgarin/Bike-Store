const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

//Ruta para productos
router.get('/productos', dataController.getProducts);

//Ruta para registro de usuarios
router.post('registerUser', dataController.registerUser);

module.exports = router;