const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const upload = require('../multerConfig'); //importar el middleware de Multer

//Ruta para traer todos los productos
router.get('/productos', dataController.getProducts);

//Ruta para traer los productos por marca
router.get('/productos/marca', dataController.getProductsByMarca);

//Ruta para traer los productos por su Id
router.get('/get-products/:id', dataController.getProductById);


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

//Ruta para eliminar productos por su id
router.delete("/delete-products/:id", dataController.deleteProduct);

//Ruta para actualizar la informacion de un producto
router.put("/update-product/:id", upload.single('imagen'), dataController.updateProduct );

//Ruta para culminar proceso de compras







module.exports = router;