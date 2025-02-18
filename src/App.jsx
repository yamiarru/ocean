import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar.jsx'; 
import CategoryFilter from './componentes/CategoryFilter/CategoryFilter';
import './App.css';

import { CartContextProvider } from './componentes/CartContext/CartContext.jsx';  

const App = () => {
  return (
    <CartContextProvider> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> 
          <Route path="/category/:categoryName" element={<CategoryFilter />} /> 

          <Route
            path="*"
            element={
              <div className="error-page">
                <h1>404: Página no encontrada</h1>
                <span role="img" aria-label="error" className="error-icon">❌</span>
              </div>
            }
          />
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
