import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock'; 
import './CategoryFilter.css';

const CategoryFilter = () => {
  const { categoryName } = useParams(); // Obtener la categoría de la URL
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Para mostrar el estado de carga

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

  return (
    <div className="producto-container">
      <h2>{categoryName}</h2>
      {loading ? (
        <p className="loading-text">Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p className="no-products">No se encontraron productos en esta categoría.</p>
      ) : (
        <div className="producto-grid">
          {productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img className="producto-img" src={producto.img} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button className="mas-info-btn">Más Info</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
