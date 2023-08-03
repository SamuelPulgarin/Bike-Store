const {  Pool } = require('pg');
const { CONFIG_DB } = require('../config/db');

const pool = new Pool(CONFIG_DB);

const getProducts = (req, res) =>{
    pool.query('select * from producto', (error,result)=>{
        if(error){
            console.error('Error al obtener los datos', error);
            res.status(500).send('Error al obtener datos');
        } else {
            res.json(result.rows);
        }
    })
}

module.exports = {
    getProducts,
}