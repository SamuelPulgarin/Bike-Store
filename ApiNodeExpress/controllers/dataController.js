const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");

//aqui empieza el sistema de logs
const fs = require("fs");
const path = require("path");

function generateLog(text, logDirectory) {
  const logFilePath = path.join(logDirectory, "app.log");
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${text}\n`;

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error("Error al escribir en el archivo de registro:", err);
    }
  });
}

function logError(error, logDirectory) {
  const errorMessage = `ERROR: ${error.message}\nStack: ${
    error.stack || "N/A"
  }`;
  generateLog(errorMessage, logDirectory);
}

const logDirectory = path.join(__dirname, "logs");

// Asegurarse de que el directorio de logs exista
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
//aqui termina el sistema de logs
/*
// Ejemplo de uso
try {
    // Tu código que puede generar errores
    throw new Error('Este es un error de ejemplo');
  } catch (error) {
    logError(error, logDirectory);
  }
  */
const pool = new Pool(CONFIG_BD);
console.log(pool);

const getProducts = (req, res) => {
  pool.query("SELECT * FROM producto", (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error.message);
      res.status(500).send("Error al obtener datos");
    } else {
      res.json(result.rows);
    }
  });
};

const getImages = (req, res) => {
  pool.query("SELECT * FROM imagenes", (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error.message);
      res.status(500).send("Error al obtener los datos");
    } else {
      res.json(result.rows);
    }
  });
};

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
  try {
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

            res
              .status(201)
              .json({ message: "Usuario registrado exitosamente" });
          }
        );
      }
    );
  } catch (error) {
    logError(error, logDirectory);
  }
};


const inicioSesion = (req, res) => {

  const { email, password} = req.body;
  console.log("datos para el login: ", req.body)

  //Validar que todos los campos necesarios esten presentes
  if (!email || !password) {
    return res.status(400).json({ error: "Falta la informacion requerida" });
  }


  pool.query("SELECT * FROM usuarios WHERE email = $1 AND password = $2",[email, password], (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error.message);
      res.status(500).send("Error al obtener datos");
    } else {
      if(result.rows.length > 0){
        return res.json({ message: "Las credenciales coinciden, usuario valido"})
      } else{
        return res.status(401).json({ error: "Las credenciales no coinciden, usuario invalido"})
      }
    }

    //Verificar que el usuario ya existe y confirmar la informacio
    

  });
};

module.exports = {
  getProducts,
  uploadImage,
  getImages,
  registrerUser,
  inicioSesion,
};
