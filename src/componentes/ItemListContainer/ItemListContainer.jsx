import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getProductos, getProductoPorId } from "../../asyncmock"; 
import './ItemListContainer.css';  
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [productoDetalle, setProductoDetalle] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const { categoryName } = useParams();

    useEffect(() => {
        setLoading(true); 

        const fetchProductos = categoryName 
            ? getProductos().then(respuesta => respuesta.filter(p => p.categoria === categoryName)) 
            : getProductos();

        fetchProductos
            .then(respuesta => {
                setProductos(respuesta);
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [categoryName]); 

    const obtenerProductoDetalle = (id) => {
        getProductoPorId(id)
            .then(producto => setProductoDetalle(producto))
            .catch(error => console.log(error));
    };

      // Función para obtener productos filtrados
  const fetchProductosByCategory = (category) => {
    getProductos()
      .then((productos) => {
        if (category) {
          const productosFiltrados = productos.filter(
            (producto) => producto.categoria === category
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(productos); // Mostrar todos los productos si no hay categoría
        }
      })
      .catch((error) => console.error("Error al obtener productos:", error));
  };

  // Llamar a la función al cargar el componente o cambiar la categoría
  useEffect(() => {
    fetchProductosByCategory(categoryName);
  }, [categoryName]);
  
    return (
        <div>
            <h2>Ofertas Verano 2025</h2>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="producto-grid">
                    {productos.map(producto => (
                        <div
                            className="producto-card"
                            key={producto.id}
                            onClick={() => obtenerProductoDetalle(producto.id)}
                        >
                            <img src={producto.img} alt={producto.nombre} className="producto-img" />
                            <h3>{producto.nombre}</h3>
                            <p>${producto.precio}</p>
                            <button className="agregar-carrito-btn">Agregar al carrito</button>
                        </div>
                    ))}
                </div>
            )}

            {productoDetalle && (
                <div className="producto-detalle">
                    <h3>Detalle del Producto</h3>
                    <img src={productoDetalle.img} alt={productoDetalle.nombre} className="producto-img" />
                    <p><strong>{productoDetalle.nombre}</strong></p>
                    <p><strong>Precio:</strong> ${productoDetalle.precio}</p>
                    <p>{productoDetalle.descripcion}</p>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
