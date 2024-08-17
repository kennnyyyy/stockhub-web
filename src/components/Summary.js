import React, { useState, useEffect } from 'react';
import '../styles/Summary.css';

function Summary() {
  const [grossSales, setGrossSales] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [cash, setCash] = useState(0);
  const [gCash, setGCash] = useState(0);
  const [credit, setCredit] = useState(0);
  const [lowStockItems, setLowStockItems] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [filter, setFilter] = useState('today');

  useEffect(() => {
    // Mock data for demonstration; replace with actual data fetching logic
    setGrossSales(1000); // Replace with logic to calculate gross sales
    setIncome(2000); // Replace with logic to calculate income
    setExpenses(500); // Replace with logic to calculate expenses
    setCash(300); // Replace with logic to get cash
    setGCash(150); // Replace with logic to get GCash
    setCredit(50); // Replace with logic to get credit
    setLowStockItems(['Item 2', 'Item 3']); // Replace with logic to get low stock items
    setTotalIncome(income - expenses); // Calculate total income
  }, [income, expenses, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // Fetch and set data based on the selected filter
  };

  return (
    <div className="summary">
      <h1>Inventory Summary</h1>
      <div className="filter-container">
        <label htmlFor="summary-filter">Filter: </label>
        <select id="summary-filter" value={filter} onChange={handleFilterChange}>
          <option value="today">Today</option>
          <option value="last7Days">Last 7 Days</option>
          <option value="last30Days">Last 30 Days</option>
          <option value="last120Days">Last 120 Days</option>
        </select>
      </div>
      <div className="summary-columns">
        <div className="summary-column">
          <div className="summary-item">
            <h2>Gross Sales for the Day</h2>
            <p>${grossSales}</p>
          </div>
          <div className="summary-item">
            <h2>Low Stock Items</h2>
            <ul>
              {lowStockItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="summary-column">
          <div className="summary-item">
            <h2>Sales Summary</h2>
            <div className="summary-subitem">
              <h3>Income</h3>
              <p> - ${income}</p>
            </div>
            <div className="summary-subitem">
              <h3>Expenses</h3>
              <p> - ${expenses}</p>
            </div>
            <div className="summary-subitem">
              <h3>Total Income</h3>
              <p> - ${totalIncome}</p>
            </div>
          </div>
          <div className="summary-item">
            <h2>Accounting Summary</h2>
            <div className="summary-subitem">
              <h3>Cash</h3>
              <p> - ${cash}</p>
            </div>
            <div className="summary-subitem">
              <h3>GCash</h3>
              <p> - ${gCash}</p>
            </div>
            <div className="summary-subitem">
              <h3>Credit</h3>
              <p> - ${credit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
