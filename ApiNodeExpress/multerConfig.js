const multer = require('multer');

//configurar el almacenamiento con multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/') // directorio donde se guaran las imagenes
    },

    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname) //nombre del archivo guardado
    }
});

const upload = multer({storage: storage});

module.exports = upload;