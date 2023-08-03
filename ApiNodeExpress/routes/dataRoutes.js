const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const upload = require('../multerConfig'); //importar el middleware de Multer

//Ruta para productos
router.get('/productos', dataController.getProducts);

//Ruta para imagenes de los productos
router.get('/imagenes', dataController.getImages);

//usar middleware upload
router.post('/upload-imagen', upload.single('imagen'), dataController.uploadImage)




module.exports = router;