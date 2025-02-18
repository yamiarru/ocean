/* eslint-disable react/prop-types */
import './Item.css';


const Item = ({  nombre, precio, img }) => {


  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: ${precio}</p>
      <button>Info</button>
      
    </div>
  );
};

export default Item;
