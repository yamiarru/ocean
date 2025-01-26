/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar.jsx'; 
import CategoryFilter from './componentes/CategoryFilter/CategoryFilter';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" component={CategoryFilter} />
        
        <Route path="*" element={<h1>404: Página no encontrada</h1>} /> 
      </Routes>
    </Router>
  );
};

export default App;

