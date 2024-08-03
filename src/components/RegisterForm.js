// src/components/RegisterForm.js
import React from 'react';
import Button from './Button';
import '../styles/Form.css'; // Import CSS styles
import logo from '../assets/images/logo-transparent-icon-and-text.png';
function RegisterForm() {
  return (
    <form className="form">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Register</h2>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button type="submit">Register</Button>
    </form>
  );
}

export default RegisterForm;
