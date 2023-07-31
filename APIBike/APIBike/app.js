const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs')

//Configuración swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Configurar las rutas
const dataRoutes = require('./routes/dataRoutes');
app.use('/', dataRoutes);

//Puerto en el que el serveidor escuchará las peticiones
const puerto = 3060;

app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
})