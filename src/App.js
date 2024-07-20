import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/Navbar' />
        </Routes>
    </Router> 
  );
}

export default App
