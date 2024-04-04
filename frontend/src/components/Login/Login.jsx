import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api'; 

import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //const userData = await login(username, password);
      navigate('/main'); 
    } catch (error) {
      setError('Credenciales inválidas'); 
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <h1>Inicio de Sesión</h1>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
