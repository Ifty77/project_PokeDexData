import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import InputTable from './_InputTable';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/input-table" element={<InputTable />} />
          <Route path="/" element={<Navigate to="/input-table" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
