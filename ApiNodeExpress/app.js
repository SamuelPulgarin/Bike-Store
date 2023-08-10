const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs')

//Dependencia de json npm install body-parser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //el middleware body-parser se aplicará a todas las solicitudes entrantes, incluidas las solicitudes para la ruta /registerUser en tu archivo dataRoutes.js.
//app.use('/', dataRoutes);
//app.use('/getPersonas', dataRoutes);


// Configurar CORS para permitir solicitudes desde localhost:3000
const corsOptions = {
    origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));


//configuracion de swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//configuracion de rutas
const dataRoutes = require('./routes/dataRoutes');
app.use('/',dataRoutes);

//Puerto en el que el servidor escuchará peticiones
const puerto = 3060;

app.listen(puerto, () =>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});





//Guardar imagenes en la base de datos 

