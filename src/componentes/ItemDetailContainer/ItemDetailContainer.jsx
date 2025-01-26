import PropTypes from 'prop-types'; // Importar PropTypes
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ productoDetalle, cerrarDetalle }) => {
  if (!productoDetalle) return null;

  return (
    <div className="overlay">
      <div className="detalle-popup">
        <button className="cerrar-btn" onClick={cerrarDetalle}>
          X
        </button>
        <h3>Detalle del Producto</h3>
        <div className="producto-detalle">
          <img
            src={productoDetalle.img}
            alt={productoDetalle.nombre}
            className="producto-img"
          />
          <div className="info-producto">
            <h4>{productoDetalle.nombre}</h4>
            <p className="descripcion">{productoDetalle.descripcion}</p>
            <p className="precio">${productoDetalle.precio}</p>
            <button className="agregar-btn">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Validación de las props
ItemDetailContainer.propTypes = {
  productoDetalle: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
  cerrarDetalle: PropTypes.func.isRequired,
};

export default ItemDetailContainer;
