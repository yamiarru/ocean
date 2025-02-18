import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartContext/CartContext';
import { Button } from '@mui/material';
import './Navbar.css';
import oceanLogo from '../../../public/img/oceanLogo.png';

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { productsInCart, removeProductFromCart, clearCart } = useContext(CartContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <header>
        <div className="logo-container">
          <img src={oceanLogo} alt="Logo" className="logo" />
        </div>

        <nav className="navbar">
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Categorías</span>
              <ul className="dropdown-content">
                <li><Link to="/category/Cuidado de la piel">Cuidado de la piel</Link></li>
                <li><Link to="/category/Cuidado del pelo">Cuidado del pelo</Link></li>
                <li><Link to="/category/Cuidado personal">Cuidado personal</Link></li>
              </ul>
            </li>
            <li><Link to="/category/Accesorios">Accesorios</Link></li>
          </ul>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Carrito">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', ml: '-200px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ p: 2, minWidth: 350, maxWidth: 400 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Carrito de compras
                </Typography>

                {productsInCart.length === 0 ? (
                  <Typography sx={{ textAlign: 'center' }}>
                    Aún no hay productos en el carrito
                  </Typography>
                ) : (
                  <>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {productsInCart.map((item) => (
                        <li
                          key={item.product.productId} // Key corregida: Usar item.product.productId
                          style={{
                            padding: '10px 0',
                            borderBottom: '1px solid #ccc',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1, marginRight: '10px' }}>
                            {item.product.nombre}
                          </Typography>
                          <Typography variant="body2" sx={{ marginRight: '10px' }}>
                            ${item.product.precio} x {item.quantity} = ${item.product.precio * item.quantity}
                          </Typography>
                          <div>
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                              onClick={() => removeProductFromCart(item.product.productId)} // Lógica corregida
                            >
                              Quitar
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 2,
                        borderTop: '1px solid #ccc',
                        pt: 2,
                      }}
                    >
                      <Button variant="contained" color="warning" size="small" onClick={clearCart} sx={{marginBottom:"10px"}}>
                        Vaciar Carrito
                      </Button>
                      <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                        Total: $
                        {productsInCart.reduce((acc, curr) => acc + curr.product.precio * curr.quantity, 0)}
                      </Typography>
                      <Button variant="contained" color="success" size="small" sx={{ mt: 1 }}>
                        Continuar Compra
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Menu>
          </Box>
        </nav>
      </header>
    </Box>
  );
};

export default Navbar;