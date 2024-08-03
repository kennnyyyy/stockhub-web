import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';
import '../styles/Dashboard.css';  // Ensure correct path to CSS

function Dashboard() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard">
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Content isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default Dashboard;
