const mongoose = require('mongoose');
const User = require('../schemas/user'); 

// habitualmente se deja el MONGO URI en un .env, como variable de entorno y no se revela. Pero aqui dejo la conexion para que puedan 
// probar los endpoints de register y login desde postman
const uri = "mongodb+srv://ClaraGarcia:LoLe2001@cluster0.twsxh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida correctamente');
});

module.exports = { User, db };
