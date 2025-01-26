import { Link } from 'react-router-dom';
import './Navbar.css';  
import oceanLogo from '../../../public/img/oceanLogo.png'; 

const Navbar = () => {
  return (
    <header>
      {/* Logo fuera del navbar */}
      <div className="logo-container">
        <img src={oceanLogo} alt="Logo" className="logo" />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>  
          
          {/* Menú desplegable para Categorías */}
          <li className="dropdown">
            <span>Categorías</span>
            <ul className="dropdown-content">
              <li><Link to="/category/cuidado-de-la-piel">Cuidado de la piel</Link></li>
              <li><Link to="/category/cuidado-del-pelo">Cuidado del pelo</Link></li>
            </ul>
          </li>

          <li><Link to="/category/accesorios">Accesorios</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
