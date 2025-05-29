import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <div className="heading">Iniciar Sesión</div>
      <form className="form" onSubmit={handleLogin}>
        <input
          required
          className="input"
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          required
          className="input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="forgot-password"><a href="#">¿Olvidaste tu contraseña?</a></span>
        <input className="login-button" type="submit" value="Ingresar" />
      </form>

      <div className="social-account-container">
        <span className="title">O ingresa con</span>
        <div className="social-accounts">
          <button className="social-button google">Google</button>
          <button className="social-button apple">Apple</button>
          <button className="social-button twitter">Twitter</button>
        </div>
      </div>

      <span className="agreement"><a href="#">Términos y condiciones</a></span>
    </div>
  );
};

export default Login;

