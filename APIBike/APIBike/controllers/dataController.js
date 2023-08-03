const { Pool } = require('pg');
const { CONFIG_DB } = require('../config/db');

const pool = new Pool(CONFIG_DB);

const getProducts = (req, res) => {
    pool.query('select * from producto', (error, result) => {
        if (error) {
            console.error('Error al obtener los datos', error);
            res.status(500).send('Error al obtener datos');
        } else {
            res.json(result.rows);
        }
    })
}

const registerUser = (req, res) => {
    const { username, email, password } = req.body;
    console.log('Datos usuarios', req.body)
    // Validar que todos los datos necesarios esten presentes
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Falta informacon requerida' });
    }

    // Consultar si ya existe el ususario en la base de datos
    pool.query('SELECT * FROM usuarios WHERE username = $1 OR email = $2', username, [username, email], (error, result) => {
        if (error) {
            console.error('Error al consultar la base de datos', error);
            return res.status(500).json({ error: 'Error al registrar el usuario', error });
        }

        // Si el usuario ya existe, devolver error
        if (result.rows.length > 0) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        //Si el usuario no existe, isertar el nuevo usuario en la base de datos
        pool.query('INSERT INTO usuarios (usurname, email, password) VALUES ($1, $2, $3)', [username, email, password], (error) => {
            if (error) {
                console.error('Error al inserta el usuario en la base de datos', error);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        });
    });
}

module.exports = {
    getProducts,
    registerUser  
};