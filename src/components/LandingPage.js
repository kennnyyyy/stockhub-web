// src/components/LandingPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../styles/LandingPage.css'; // Import CSS styles

function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="landing-page">
      <div className="form-container">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
