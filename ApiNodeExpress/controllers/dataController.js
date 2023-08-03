const { Pool } = require('pg');
const { CONFIG_BD } = require('../config/db');

const pool = new Pool(CONFIG_BD);
console.log(pool);


const getProducts = (req, res) =>{
    pool.query('SELECT * FROM producto', (error, result) =>{
        if(error){
            console.error('Error al obtener los datos', error.message);
            res.status(500).send('Error al obtener datos');
        }else {
            res.json(result.rows);
        }
    });
};

const getImages = (req, res) =>{
    pool.query('SELECT * FROM imagenes', (error, result) =>{
        if(error){
            console.error('Error al obtener los datos', error.message);
            res.status(500).send('Error al obtener los datos');
        }else {
            res.json(result.rows);
        }
    })
}

const uploadImage = (req, res)=>{

    //verificar si se ha subido un archivo
    if(!req.file){
        return res.status(400).json({ message: 'No se ha subido ningun archivo.'});
    }

    //acceder a los detalles del archivo subido
    const {filename, mimetype, size} = req.file;

    const rutaImagen = `uploads/${filename}`;
    const query = `INSERT INTO imagenes (ruta) VALUES ($1)`;
    const values = [rutaImagen];

    pool.query(query, values)
        .then(() =>{
            res.json({message: 'imagen subida y ruta guardada en la abse de datos'});
        })
        .catch((err) =>{
            console.error('Error al guardar la ruta de la imagen en la base de datos', err);
            res.status(500).json({ message: 'Error al guardar la ruta de la imagen en la base de datos'});
        });
};

module.exports = {
    getProducts,
    uploadImage,
    getImages,
}