import React, { useState } from 'react';
import '../styles/Inventory.css';
import logo from '../assets/images/logo-transparent-icon-and-text.png';
import ItemModal from './ItemModal';

function Inventory() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1', sku: 'SKU001', quantity: 100, price: 10.00 },
    { id: '2', name: 'Item 2', sku: 'SKU002', quantity: 50, price: 20.00 },
    // Add more items as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(null);  // Use null, 'add', 'edit', or 'delete'

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const editItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const openAddModal = () => {
    setModalItem({ id: '', name: '', sku: '', quantity: '', price: '' }); // Prepare an empty item for adding
    setIsEditMode('add');
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setModalItem(item); // Pass the selected item for editing
    setIsEditMode('edit');
    setIsModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setModalItem(item); // Pass the selected item for deleting
    setIsEditMode('delete');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
  };

  const handleSave = (item) => {
    if (isEditMode === 'add') {
      addItem(item);
    } else if (isEditMode === 'edit') {
      editItem(item);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    deleteItem(id);
    closeModal();
  };

  return (
    <div className="inventory">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h1>Inventory Management</h1>

      {/* Actions */}
      <div className="actions-controls">
        <button onClick={openAddModal} className="action-button">
          <img src="https://img.icons8.com/?size=100&id=cAd29bV1wGyF&format=png&color=000000" alt="Add Item" />
        </button>
        <button onClick={() => openEditModal(modalItem)} className="action-button">
          <img src="https://img.icons8.com/?size=100&id=tKvnEzfDG1hI&format=png&color=000000" alt="Edit Item" />
        </button>
        <button onClick={() => openDeleteModal(modalItem)} className="action-button">
          <img src="https://img.icons8.com/?size=100&id=00Qr877pFzQp&format=png&color=000000" alt="Delete Item" />
        </button>
      </div>

      {/* Inventory List/Table */}
      <div className="inventory-list">
        <h2>Inventory List</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} onClick={() => openEditModal(item)}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ItemModal for Add/Edit/Delete */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={modalItem}
        onSave={handleSave}
        onDelete={handleDelete}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default Inventory;
