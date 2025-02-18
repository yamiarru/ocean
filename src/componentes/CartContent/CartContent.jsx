import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';

const CartContent = () => {
  const { productsInCart, removeProductFromCart, clearCart } = useContext(CartContext);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {!(productsInCart?.length > 0) && (
        <li style={{ padding: '1rem 0', textAlign: 'center' }}>
          Aún no hay productos en el carrito
        </li>
      )}

      {productsInCart?.length > 0 &&
        productsInCart.map((item, index) => (
          <li
            key={`${item.product.productId}-${index}`}
            style={{
              borderBottom: '1px solid #ccc',
              marginBottom: '1rem',
              paddingBottom: '1rem'
            }}
          >
            <h6>{item.product.nombre}</h6>
            <p>Precio unitario: ${item.product.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: ${item.product.price * item.quantity}</p>
            <div>
              
              <Button
                variant="danger"
                onClick={() => removeProductFromCart(item.product.productId)}
                size="sm"
              >
                Quitar
              </Button>
            </div>
          </li>
        ))
      }

      {productsInCart?.length > 0 && (
        <li>
          <Button variant="warning" onClick={clearCart} size="sm">
            Vaciar carrito
          </Button>{' '}
          <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            TOTAL: ${productsInCart.reduce(
              (acc, curr) => acc + curr.product.price * curr.quantity,
              0
            )}
          </div>
          <Button variant="success" size="sm" style={{ marginTop: '1rem' }}>
            Continuar compra
          </Button>
        </li>
      )}
    </ul>
  );
};

export default CartContent;
