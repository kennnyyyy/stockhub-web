import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../styles/Form.css'; // Import CSS styles
import logo from '../assets/images/logo-transparent-icon-and-text.png';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your login logic here
    navigate('/dashboard');
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <img src={logo} alt="Logo" className="logo" />
      <h2>Welcome</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
