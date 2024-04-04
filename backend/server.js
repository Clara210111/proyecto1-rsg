// En server.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { User } = require('./db/db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    // Genera un token de autenticación válido por 1 hora
    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Verifica si el usuario ya existe en la base de datos
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
      }
  
      // Crea un nuevo usuario utilizando el esquema User
      const newUser = new User({ username, password });
      await newUser.save(); // Guarda el usuario en la base de datos
  
      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
