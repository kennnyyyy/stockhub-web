import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/SideMenu.css';  // Ensure correct path to CSS

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Menu
      left
      isOpen={isOpen}
      onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      width={250}  // Set the width of the side menu here
    >
      <a className="menu-item" href="/">Dashboard</a>
      <a className="menu-item" href="/inventory">Inventory</a>
      <a className="menu-item" href="/sales">Sales</a>
      <a className="menu-item" href="/reports">Reports</a>
      <a className="menu-item" href="/settings">Settings</a>
    </Menu>
  );
}

export default SideMenu;
