import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/Quote';
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <swich>
      <Router>
        <Navbar />
        <div className="outline-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="/quote" element={<DisplayQuote />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </div>
      </Router>
    </swich>
  );
}

export default App;
