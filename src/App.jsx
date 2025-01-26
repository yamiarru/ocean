
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar.jsx'; 
import CategoryFilter from './componentes/CategoryFilter/CategoryFilter';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/category/:categoryName" element={<CategoryFilter />} /> 
        <Route path="*" element={<h1>404: Página no encontrada</h1>} /> 
      </Routes>
    </Router>
  );
};

export default App;
