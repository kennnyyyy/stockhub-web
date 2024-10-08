import React from 'react';
import Inventory from './Inventory';
import Sales from './Sales';
import Reports from './Reports';
import Settings from './Settings';
import '../styles/Content.css';  // Ensure correct path to CSS
import Summary from './Summary';

function Content({ isMenuOpen, activeSection, closeMenu }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'inventory':
        return <Inventory />;
      case 'sales':
        return <Sales />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Summary />;
    }
  };

  return (
    <div className={`content ${isMenuOpen ? 'content-open' : 'content-closed'}`} onClick={closeMenu}>
      {renderContent()}
    </div>
  );
}

export default Content;
