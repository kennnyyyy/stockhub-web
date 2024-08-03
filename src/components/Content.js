import React from 'react';
import '../styles/Content.css';  // Ensure correct path to CSS

function Content({ isMenuOpen }) {
  return (
    <div className={`content ${isMenuOpen ? 'content-open' : 'content-closed'}`}>
      {/* Your content goes here */}
      <h1>Main Content</h1>
    </div>
  );
}

export default Content;
