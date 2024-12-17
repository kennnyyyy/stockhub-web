// src/components/LandingPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../styles/LandingPage.css'; // Import CSS styles
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    navigate('/form');
  };
  return (
    <div className="landing-page">
      <div className="form-container">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
          {/* Contact Us Button */}
      <Button type="button" onClick={handleForm}>Contact Us</Button>
      </div>
    </div>
  );
}

export default LandingPage;
