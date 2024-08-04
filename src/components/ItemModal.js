import React, { useState, useEffect } from 'react';
import '../styles/ItemModal.css';

function ItemModal({ isOpen, onClose, item, onSave, onDelete, isEditMode }) {
  const [formData, setFormData] = useState({ id: '', name: '', sku: '', quantity: '', price: '' });

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({ id: '', name: '', sku: '', quantity: '', price: '' });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    onDelete(formData.id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          {isEditMode === 'add' ? 'Add New Item' :
          isEditMode === 'edit' ? 'Edit Item' :
          'Delete Item'}
        </h2>
        <form>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              disabled={isEditMode === 'delete'}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isEditMode === 'delete'}
            />
          </label>
          <label>
            SKU:
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              disabled={isEditMode === 'delete'}
            />
          </label>
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              disabled={isEditMode === 'delete'}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              disabled={isEditMode === 'delete'}
            />
          </label>
        </form>
        <div className="modal-buttons">
          {isEditMode === 'add' && <button onClick={handleSave}>Add Item</button>}
          {isEditMode === 'edit' && <button onClick={handleSave}>Save Changes</button>}
          {isEditMode === 'delete' && <button onClick={handleDelete}>Delete Item</button>}
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
