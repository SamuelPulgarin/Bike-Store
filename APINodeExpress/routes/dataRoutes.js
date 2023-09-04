const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const upload = require('../multerConfig'); //importar el middleware de Multer

//Ruta para traer los productos
router.get('/productos', dataController.getProducts);

//Ruta para imagenes de los productos
//router.get('/imagenes', dataController.getImages);

//usar middleware upload
router.post('/upload-imagen', upload.single('imagen'), dataController.uploadImage)

//Ruta para registro de usuarios
router.post('/registrar', dataController.registrerUser);

//Ruta para el ingreso de usuarios
router.post('/login', dataController.inicioSesion);

//Ruta para agregar nuevos productos a la base de datos
router.post('/create-product', upload.single('imagen'), dataController.addProduct);

//Ruta para eliminar los productos
router.delete()




module.exports = router;