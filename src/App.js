import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import './fonts/monopixel.otf'


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
