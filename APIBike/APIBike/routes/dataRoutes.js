const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/productos', dataController.getProducts);

module.exports = router;