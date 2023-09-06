const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");

const pool = new Pool(CONFIG_BD);
console.log(pool);

const getProducts = (req, res) => {
  pool.query(
    "SELECT producto.*, imagenes.ruta FROM producto JOIN imagenes ON producto.id = imagenes.id;",
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

const getProductsByMarca = async(req, res) =>{

  const marca = req.params.marca

  try {
    // Realiza una consulta a la base de datos para obtener el producto por su Marca
    const product = await pool.query("SELECT * FROM producto WHERE marca = $1", [marca]);

    if (product.rows.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(product.rows[0]); // Devuelve los productos encontrado
  } catch (error) {
    console.error("Error al obtener producto por su Marca", error);
    res.status(500).json({ error: "Internal server error" });
  }

  pool.query
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
    "SELECT * FROM usuarios WHERE username = $1 OR email = $2",
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
        "INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)",
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
    "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
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
  console.log("estoy aquii wachaaaaaa muchachaaaaaaaaaaaaaaaaaaaaaa");

  //Obtener los datos del producto
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

  // Obtener la ruta de la imagen subida
  const rutaImagen = req.file ? `uploads/${req.file.filename}` : null;
  console.log(rutaImagen)

  //Validar que todos los campos necesarios esten presentes
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
    console.log('Me desvie por aqui')
    return res.status(400).json({ error: "Falta la informacion requerida" });
  }

  try {

    //insertar imagen con id del producto
    if (rutaImagen) {
      console.log('Me encuentro adentro de esto')
      await pool.query("INSERT INTO imagenes (id, ruta) VALUES ($1, $2)", [
        id,
        rutaImagen,
      ]);
    }

    console.log('entre al try carajo')

    // Consultar si el producto ya existe en la base de datos
    await pool.query(
      "SELECT * FROM producto WHERE id = $1 OR nombre = $2",
      [id, nombre],
      (error, result) => {
        if (error) {
          console.error("Error al consultar la base de datos", error);
          return res
            .status(500)
            .json({ error: "Error agregar el producto", error });
        }

        //Si el producto ya existe en la base de datos devolver un error
        if (result.rows.length > 0) {
          return res.status(400).json({ error: "el producto ya existe" });
        }
        console.log('avanzando')
        //Si el producto no existe, insertar el nuevo producto en la base de datos
        pool.query(
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
          ],
          (error) => {
            if (error) {
              console.error(
                "Error al agregar el producto en la base de datos",
                error
              );
              return res
                .status(500)
                .json({ error: "Error al registrar el producto" });
            }



            
            console.log('casi termino')
          }
        );
      }
    );

    console.log('lo logré')

    res.status(201).json({ message: "Imagen y producto subidos exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Error en el servidor"})
  }
};

const deleteProduct = async(req, res) =>{

  const productId = parseInt(req.params.id);

  try{

    //Eliminar un producto por su id en la base de datos
    const results = await pool.query("DELETE FROM producto WHERE id = $1", [productId]);

    if(results.rowCount === 1){
      res.status(200).json({ Message: 'Producto eliminado con exito'});
    }else {
      res.status(404).json({Message: 'Producto no encontrado'});
    }
  } catch(error){
    console.error("Error al eliminar el producto", error);
    res.status(500).json({error: 'Algo ha ocurrido cuando se ha intentado eliminar el recurso'});
  }

}

module.exports = {
  getProducts,
  uploadImage,
  //  getImages,
  registrerUser,
  inicioSesion,
  addProduct,
  getProductsByMarca,
  deleteProduct,
};
