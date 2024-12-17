import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/dashboard.js';
import EmbeddedForm from './components/EmbeddedForm.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<EmbeddedForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
