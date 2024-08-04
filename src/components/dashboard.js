import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';
import '../styles/Dashboard.css';  // Ensure correct path to CSS

function Dashboard() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');  // Default to 'main' content

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="dashboard">
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} setActiveSection={setActiveSection} />
      <Content isMenuOpen={isMenuOpen} activeSection={activeSection} closeMenu={closeMenu} />
    </div>
  );
}

export default Dashboard;
