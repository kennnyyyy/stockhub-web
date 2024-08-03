import React from 'react';
import Button from './Button';
import '../styles/Form.css'; // Import CSS styles
import logo from '../assets/images/logo-transparent-icon-and-text.png';
function LoginForm() {
  return (
    <form className="form">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Welcome</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
