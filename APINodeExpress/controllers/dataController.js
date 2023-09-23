const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");
const { query } = require("express");

const pool = new Pool(CONFIG_BD);
console.log(pool);

const estado = 'habilitado';

const getProducts = (req, res) => {
    pool.query(
        "SELECT producto.*, imagenes.ruta FROM producto JOIN imagenes ON producto.id = imagenes.id WHERE producto.estado = $1", [estado],
        (error, result) => {
            if (error) {
                console.error("Error al obtener los datos", error.message);
                res.status(500).send("Error al obtener datos");
            } else {
                res.json(result.rows);
            }
        }
    );
};

const getUserByEmail = async (req, res) => {

    const userEmail = req.params.email;

    console.log(userEmail);

    try {
        //Realiza consulta a la base de datos para obtener los datos del cliente por su email
        const user = await pool.query("SELECT * FROM cliente WHERE email = $1", [userEmail]);

        if (user.rows.length === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.status(200).json(user.rows[0]);

    } catch (error) {

        console.error('Error al obtener el usuario por su email', error);
        res.status(500).json({ error: "Error interno en el servidor" })
    }
}

const getProductsByMarca = async (req, res) => {

    const marca = req.params.marca
    console.log(marca);

    try {

        const estado = 'habilitado';

        // Realiza una consulta a la base de datos para obtener el producto por su Marca
        const product = await pool.query("SELECT producto.*, imagenes.ruta FROM producto JOIN imagenes ON producto.id = imagenes.id WHERE producto.marca = $1 AND producto.estado = $2 LIMIT 10", [marca, estado]);

        if (product.rows.length === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.status(200).json(product.rows); // Devuelve los productos encontrado
    } catch (error) {
        console.error("Error al obtener producto por su Marca", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getProductById = async (req, res) => {

    const id = req.params.id

    try {
        //Realiza una consulta a la base de datos para obtener el producto por su Marca
        const product = await pool.query("SELECT producto.*, imagenes.ruta FROM producto JOIN imagenes ON producto.id = imagenes.id WHERE producto.id = $1", [id]);

        if (product.rows.length === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.status(200).json(product.rows[0]); //Devolver producto encontrado
    } catch (error) {
        console.error("Error al obtener producto por su Id", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/*const getImages = (req, res) => {
  pool.query("SELECT * FROM imagenes", (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error.message);
      res.status(500).send("Error al obtener los datos");
    } else {
      res.json(result.rows);
    }
  });
};
*/

const uploadImage = (req, res) => {
    //verificar si se ha subido un archivo
    if (!req.file) {
        return res.status(400).json({ message: "No se ha subido ningun archivo." });
    }

    //acceder a los detalles del archivo subido
    const { filename, mimetype, size } = req.file;

    const rutaImagen = `uploads/${filename}`;
    const query = `INSERT INTO imagenes (ruta) VALUES ($1)`;
    const values = [rutaImagen];

    pool
        .query(query, values)
        .then(() => {
            res.json({
                message: "imagen subida y ruta guardada en la abse de datos",
            });
        })
        .catch((err) => {
            console.error(
                "Error al guardar la ruta de la imagen en la base de datos",
                err
            );
            res.status(500).json({
                message: "Error al guardar la ruta de la imagen en la base de datos",
            });
        });
};

const registrerUser = (req, res) => {
    console.log(
        "estoy aquii wachoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    );
    const { username, email, password } = req.body;

    console.log("datos usuario", req.body);

    //Validar que todos los campos necesarios esten presentes
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Falta la informacion requerida" });
    }

    // Consultar si el usuario ya existe en la base de datos
    pool.query(
        "SELECT * FROM cliente WHERE username = $1 OR email = $2",
        [username, email],
        (error, result) => {
            if (error) {
                console.error("Error al consultar la base de datos", error);
                return res
                    .status(500)
                    .json({ error: "Error al registrar el usuario", error });
            }

            //Si el usuario ya existe devolver un error
            if (result.rows.length > 0) {
                return res.status(400).json({ error: "el usuario ya existe" });
            }

            //Si el usuario no existe, insertar el nuevo usuario en la base de datos
            pool.query(
                "INSERT INTO cliente (username, email, password) VALUES ($1, $2, $3)",
                [username, email, password],
                (error) => {
                    if (error) {
                        console.error(
                            "Error al insertar el usuario en la base de datos",
                            error
                        );
                        return res
                            .status(500)
                            .json({ error: "Error al registrar el Usuario" });
                    }

                    res.status(201).json({ message: "Usuario registrado exitosamente" });
                }
            );
        }
    );
};

const inicioSesion = (req, res) => {
    const { email, password } = req.body;
    console.log("datos para el login: ", req.body);

    //Validar que todos los campos necesarios esten presentes
    if (!email || !password) {
        return res.status(400).json({ error: "Falta la informacion requerida" });
    }

    pool.query(
        "SELECT * FROM cliente WHERE email = $1 AND password = $2",
        [email, password],
        (error, result) => {
            if (error) {
                console.error("Error al obtener los datos", error.message);
                res.status(500).send("Error al obtener datos");
            } else {
                if (result.rows.length > 0) {
                    return res.json({
                        message: "Las credenciales coinciden, usuario valido",
                    });
                } else {
                    return res
                        .status(401)
                        .json({ error: "Las credenciales no coinciden, usuario invalido" });
                }
            }

            //Verificar que el usuario ya existe y confirmar la informacio
        }
    );
};

const addProduct = async (req, res) => {
    console.log("estoy aquí wachaaaaaa muchachaaaaaaaaaaaaaaaaaaaaaa");

    const client = await pool.connect(); // Obtener una conexión del pool

    // Obtener los datos del producto
    const {
        id,
        nombre,
        marca,
        descripcion,
        categoria,
        talla,
        precio,
        color,
        stock,
    } = req.body;
    console.log("datos producto", req.body);
    console.log("Ruta imagen: ", req.file);

    // Obtener la ruta de la imagen subida
    const rutaImagen = req.file ? `uploads/${req.file.filename}` : null;
    console.log(rutaImagen);

    // Validar que todos los campos necesarios estén presentes
    if (
        !id ||
        !nombre ||
        !marca ||
        !descripcion ||
        !categoria ||
        !talla ||
        !precio ||
        !color ||
        !stock
    ) {
        console.log('Me desvié por aquí');
        return res.status(400).json({ error: "Falta la información requerida" });
    }

    try {

        //transaccion #1 iniciar la transaccion
        await client.query('BEGIN');

        console.log('entre al try carajo');

        // Consultar si el producto ya existe en la base de datos
        const result = await pool.query(
            "SELECT * FROM producto WHERE id = $1 OR nombre = $2",
            [id, nombre]
        );

        if (result.rows.length > 0) {
            return res.status(400).json({ error: "el producto ya existe" });
        }
        console.log('avanzando');

        // Si el producto no existe, insertar el nuevo producto en la base de datos
        await pool.query(
            "INSERT INTO producto (id, nombre, marca, descripcion, categoria, talla, precio, color, stock) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [
                id,
                nombre,
                marca,
                descripcion,
                categoria,
                talla,
                precio,
                color,
                stock,
            ]
        );

        //Registrar movimiento en la tabla compras
        const compras = await pool.query(
            "INSERT INTO compras (id_producto, cantidad, precio) VALUES ($1, $2, $3)",
            [id, stock, precio]
        );

        if (compras) {
            const compra = await pool.query(
                "SELECT * FROM compras WHERE id_producto = $1",
                [id]
            )

            const id_compra = compra.rows[0].id;
            //Registrar movimiento en la tabla stock
            if (compra) {
                const existProductInStock = await pool.query(
                    "SELECT * FROM stock WHERE codigo = $1",
                    [id]
                );

                if (existProductInStock.rows.length > 0) {
                    await pool.query("UPDATE stock SET entradas = $1, id_entrada = $2 WHERE codigo = $3",
                        [stock, id_compra, id]
                    )
                } else {
                    //Codigo para obtener la fecha actual formato YYYY-MM-DD
                    const fechaActual = new Date();

                    // Obtiene el año, mes y día de la fecha actual
                    const year = fechaActual.getFullYear();
                    const month = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Agrega un cero inicial si es necesario
                    const day = String(fechaActual.getDate()).padStart(2, '0'); // Agrega un cero inicial si es necesario
                    const fechaFormateada = `${year}-${month}-${day}`;


                    await pool.query("INSERT INTO stock (codigo, inventario_inicial, fecha_inventario_inicial) VALUES ($1, $2, $3)",
                        [id, stock, fechaFormateada])
                }
            }
        }


        console.log('casi termino');

        // Insertar imagen con id del producto
        if (rutaImagen) {
            console.log('Me encuentro adentro de esto');
            await pool.query("INSERT INTO imagenes (id, ruta) VALUES ($1, $2)", [
                id,
                rutaImagen,
            ]);
        }

        console.log('lo logré');

        //transaccion #2 Confirmar la transacción
        await client.query('COMMIT');

        res.status(201).json({ message: "Imagen y producto subidos exitosamente" });
    } catch (error) {

        //Transaccion #3 Reevertir la transaccion en caso de error
        await client.query('ROLLBACK');

        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
    finally {
        client.release(); // Liberar la conexión
    }
};


const deleteProduct = async (req, res) => {

    const productId = parseInt(req.params.id);
    const estado = 'deshabilitado';

    try {

        //Deshabilitar un producto por su id en la base de datos
        const results = await pool.query("UPDATE producto SET estado = $1 WHERE id = $2", [estado, productId]);

        if (results.rowCount === 1) {
            res.status(200).json({ Message: 'Producto eliminado con exito' });
        } else {
            res.status(404).json({ Message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error("Error al eliminar el producto", error);
        res.status(500).json({ error: 'Algo ha ocurrido cuando se ha intentado eliminar el recurso' });
    }

}

const updateProduct = async (req, res) => {

    const productId = parseInt(req.params.id);
    const { nombre, marca, talla, color, descripcion, categoria, precio, stock, NewStock } = req.body;
    //const { filename, mimetype, size } = req.file;
    const rutaImagen = req.file ? `uploads/${filename}` : null;
   
    const nuevoStock = parseInt(stock) + parseInt(NewStock);

    console.log(req.body);

    if (!nombre || !marca || !talla || !color || !descripcion || !categoria || !precio || !stock) {

        res.status(400).json({ error: "Falta la informacion requerida" })
    }

    try {

        //Verifica si el producto existe
        const productExist = await pool.query(
            'SELECT * FROM producto WHERE id = $1', [productId]
        );

        if (productExist.rowCount === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        //Realizar la actualizacion del producto
        await pool.query(
            'UPDATE producto SET nombre = $1, marca = $2, talla = $3, color = $4, descripcion = $5, categoria = $6, precio = $7, stock = $8 WHERE id = $9',
            [nombre, marca, talla, color, descripcion, categoria, precio, nuevoStock, productId]
        );

        //Si hay una imagen, se actualizara la ruta en la tabla imagenes
        if (rutaImagen) {
            await pool.query('UPDATE imagenes SET ruta = $1 WHERE id = $2', [rutaImagen, productId])
        }

        //Insertar datos en la tabla compras
        const compras = await pool.query('INSERT INTO compras (id_producto, cantidad, precio) VALUES ($1, $2, $3)', [productId, NewStock, precio]);

        if(compras){
            //Consulta tabla compras
            const getCompras = await pool.query(
                'SELECT * FROM compras ORDER BY id DESC LIMIT 1',
            )
            const id_compra = getCompras.rows[0].id;

            //Insertar datos en la tabla stock
            await pool.query('UPDATE stock SET entradas = $1, id_entrada = $2 WHERE codigo = $3 ', [NewStock, id_compra ,productId])
        }

        res.status(200).json({ message: "Producto e imagen actualizado correctamente" });

    } catch (error) {

        console.error('Error al actualizar el producto', error);
        res.status(500).json({ error: "Error interno en el servidor" });

    }
}

const buy = async (req, res) => {

    const { productId, cantidad, email, precio } = req.body;

    console.log('Todo listo para compra: ', req.body);

    if (!productId || !cantidad || !email || !precio) {

        console.log('me disvie :(');

        return res.status(400).json({ error: 'Falta informacion requerida' });
    }

    try {
        //Traer informacion de producto
        const productFound = await pool.query("SELECT * FROM producto WHERE id = $1", [productId]);

        if (productFound.rowCount === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        //Constante con valor para actualizar stock
        const stockActual = parseInt(productFound.rows[0].stock) - parseInt(cantidad);
        //console.log('stock del producto: ',productFound.rows[0].stock, 'la cantidad: ',cantidad, 'supuesto resultado: ', stockActual)

        if (stockActual <= 0) {
            //Estado del producto
            const estado = 'deshabilitado';

            await pool.query("UPDATE producto SET stock = $1, estado = $2 WHERE id = $3", [stockActual, estado, productId]);
        } else {

            await pool.query("UPDATE producto SET stock = $1 WHERE id = $2", [stockActual, productId])
        }

        const userBuy = await pool.query("SELECT * FROM cliente WHERE email = $1", [email]);

        if (userBuy) {
            const userId = parseInt(userBuy.rows[0].id_usuario);

            const ventas = await pool.query("INSERT INTO ventas (id_producto, id_cliente, precio, cantidad) VALUES ($1, $2, $3, $4)", [productId, userId, precio, cantidad]);

            if (ventas) {
                const venta = await pool.query("SELECT * FROM ventas WHERE id_producto = $1", [productId]);

                if (venta) {
                    const ventaId = venta.rows[0].id;

                    const existProductInStock = await pool.query(
                        "SELECT * FROM stock WHERE codigo = $1",
                        [productId]
                    );

                    if (existProductInStock.rows.length > 0) {
                        await pool.query("UPDATE stock SET salidas = $1, id_salida = $2 WHERE codigo = $3",
                            [cantidad, ventaId, productId]
                        )
                    } else {
                        return res.status(404).json({ error: 'No se encontró producto en el inventario' })
                    }
                }
            }
        }


        res.status(204).json({ message: "Compra exitosa" });

    } catch (err) {
        console.error('Error al completar el proceso de compra ', err);
        res.status(500).json({ error: "Error interno en el servidor" });
    }

}

module.exports = {
    getProducts,
    getUserByEmail,
    uploadImage,
    //  getImages,
    registrerUser,
    inicioSesion,
    addProduct,
    getProductsByMarca,
    deleteProduct,
    getProductById,
    updateProduct,
    buy,
};
