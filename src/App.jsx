import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import InputTable from './_InputTable';
import { CartProvider } from './CartContext';
import DetailsPage from './Details_Page/detailspage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/input-table" element={<InputTable />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
