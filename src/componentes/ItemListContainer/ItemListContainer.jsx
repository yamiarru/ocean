import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductoPorId } from "../../asyncmock";
import "./ItemListContainer.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useCart } from "../UseCart/UseCart";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();
  const { addProductToCart } = useCart();

  useEffect(() => {
    setLoading(true);

    const fetchProductos = categoryName
      ? getProductos().then((respuesta) =>
          respuesta.filter((p) => p.categoria === categoryName)
        )
      : getProductos();

    fetchProductos
      .then((respuesta) => {
        setProductos(respuesta);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoryName]);

  const obtenerProductoDetalle = (id) => {
    getProductoPorId(id)
      .then((producto) => setProductoDetalle(producto))
      .catch((error) => console.log(error));
  };

  const cerrarDetalle = () => {
    setProductoDetalle(null);
  };

  return (
    <div>
      <h2>Ofertas Verano 2025</h2>
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className="producto-grid">
          {productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img
                src={producto.img}
                alt={producto.nombre}
                className="producto-img"
              />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <button
                className="mas-info-btn"
                onClick={() => obtenerProductoDetalle(producto.id)}
              >
                Más Info
              </button>
              <button
                className="mas-info-btn"
                onClick={() => addProductToCart({ product: producto, quantity: 1 })}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      )}

      {productoDetalle && (
        <ItemDetailContainer
          productoDetalle={productoDetalle}
          cerrarDetalle={cerrarDetalle}
        />
      )}
    </div>
  );
};

export default ItemListContainer;