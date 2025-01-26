import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock'; 

 const CategoryFilter = () => {
  const { categoryName } = useParams();  // Obtener la categoría de la URL
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);  // Para mostrar el estado de carga

  // Usar useEffect para obtener productos al cargar o cambiar de categoría
  useEffect(() => {
    setLoading(true); // Inicia el estado de carga
    fetchProductosByCategory(categoryName);
  }, [categoryName]);  // Dependiendo de categoryName, se actualizarán los productos

  // Función para obtener productos filtrados por categoría
  const fetchProductosByCategory = (category) => {
    getProductos()
      .then(respuesta => {
        // Filtrar productos por categoría si hay categoría definida
        const productosFiltrados = category
          ? respuesta.filter(producto => producto.categoria === category)
          : respuesta;  // Si no hay categoría, mostrar todos los productos

        setProductos(productosFiltrados);
        setLoading(false); // Finaliza el estado de carga
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Si está cargando, muestra un mensaje */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div>
          {productos.length === 0 ? (
            <p>No se encontraron productos en esta categoría.</p>
          ) : (
            productos.map(producto => (
              <div key={producto.id}>
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <img src={producto.img} alt={producto.nombre} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default CategoryFilter;