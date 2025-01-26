import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; // Importar el componente para mostrar el detalle
import './CategoryFilter.css';

const CategoryFilter = () => {
  const { categoryName } = useParams(); // Obtener la categoría de la URL
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Para mostrar el estado de carga
  const [productoDetalle, setProductoDetalle] = useState(null); // Producto seleccionado para el detalle

  useEffect(() => {
    setLoading(true);
    fetchProductosByCategory(categoryName); // Llamar a la función cuando cambie la categoría
  }, [categoryName]);

  const fetchProductosByCategory = (category) => {
    getProductos()
      .then((respuesta) => {
        // Normalizamos el nombre de la categoría para evitar inconsistencias
        const productosFiltrados = respuesta.filter((producto) => 
          producto.categoria.toLowerCase() === category.toLowerCase()
        );

        setProductos(productosFiltrados); // Actualizar productos filtrados
        setLoading(false); // Finalizar carga
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const obtenerProductoDetalle = (id) => {
    const producto = productos.find(p => p.id === id); // Buscar el producto por ID
    setProductoDetalle(producto); // Establecer el producto para mostrar en el popup
  };

  const cerrarDetalle = () => {
    setProductoDetalle(null); // Cerrar el pop-up
  };

  return (
    <div className="producto-container">
      <h2>{categoryName}</h2>
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Cargando productos...</p>
        </div>
      ) : productos.length === 0 ? (
        <p className="no-products">
          <span role="img" aria-label="construcción">🚧</span> No se encontraron productos en ésta categoría. <span role="img" aria-label="cara triste">😞</span>
        </p>
      ) : (
        <div className="producto-grid">
          {productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img className="producto-img" src={producto.img} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button className="mas-info-btn" onClick={() => obtenerProductoDetalle(producto.id)}>
                Más Info
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Mostrar el componente ItemDetailContainer si hay un producto seleccionado */}
      {productoDetalle && (
        <ItemDetailContainer
          productoDetalle={productoDetalle}
          cerrarDetalle={cerrarDetalle}
        />
      )}
    </div>
  );
};

export default CategoryFilter;
