import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
