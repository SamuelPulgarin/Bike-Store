const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const upload = require('../multerConfig'); //importar el middleware de Multer

//Ruta para traer todos los productos
router.get('/productos', dataController.getProducts);

//Ruta para traer un cliente por su correo
router.get("/getUserByEmail/:email", dataController.getUserByEmail);

//Ruta para traer los productos por marca
router.get('/producto/:marca', dataController.getProductsByMarca);

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

//Ruta para actualizar la informacion de un producto
router.put("/update-user/:email", dataController.updateUser);

//Ruta para culminar proceso de compras
router.post("/buy-complete", dataController.buy);

//Ruta para obtener el historial de compras de un usuario por su id
router.get("/history-user/:email", dataController.getHistoryUser);







module.exports = router;