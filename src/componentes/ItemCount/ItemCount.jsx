import  { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <span>{count}</span>
      <button onClick={aumentar}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

// Agrega la validación de las props
ItemCount.propTypes = {
  stock: PropTypes.number.isRequired, 
  onAdd: PropTypes.func.isRequired,    
};

export default ItemCount;
