import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Results2025 from './components/Results2025';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resultats" element={<Results2025 />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}