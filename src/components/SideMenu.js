
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/SideMenu.css';  // Ensure correct path to CSS

function SideMenu({setActiveSection}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 
  return (
    <Menu
      left
      isOpen={isOpen}
      onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      width={250}  // Set the width of the side menu here
    > 
      <a className="menu-item" onClick={() => { setActiveSection('main'); toggleMenu(); }} href="#">Dashboard</a>
      <a className="menu-item" onClick={() => { setActiveSection('inventory'); toggleMenu(); }} href="#">Inventory</a>
      <a className="menu-item" onClick={() => { setActiveSection('sales'); toggleMenu(); }} href="#">Sales</a>
      <a className="menu-item" onClick={() => { setActiveSection('reports'); toggleMenu(); }} href="#">Reports</a>
      <a className="menu-item" onClick={() => { setActiveSection('settings'); toggleMenu(); }} href="#">Settings</a>
    </Menu>
  );
}

export default SideMenu;