import React from 'react';
import '../styles/Button.css'; // Import CSS styles

function Button({ children, onClick, type = 'button' }) {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;