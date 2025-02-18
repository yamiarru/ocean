import { useState } from 'react';
import { Button } from 'react-bootstrap';
import  imgAddButton  from '../../assets/plus.svg';
import  imgMinusButton  from '../../assets/minus.svg';
import PropTypes from 'prop-types';  

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleCountRemove = () => {
        setCount(count - 1);
    }
    
    const handleCountAdd = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div>
                <Button style={{ backgroundColor: "white", borderColor: "white" }} disabled={count <= 1 && true} onClick={() => handleCountRemove()}>
                    <img src={imgMinusButton} alt="Restar unidad" />
                </Button>
                <span>{count}</span>
                <Button style={{ backgroundColor: "white", borderColor: "white" }} disabled={count >= stock && true} onClick={() => handleCountAdd()}>
                    <img src={imgAddButton} alt="Sumar unidad" />
                </Button>
            </div>
            <Button onClick={() => { onAdd(count); setCount(1)} } disabled={stock < 1 && true}>Agregar al carrito</Button>
        </div>
    )
}

Counter.propTypes = {
    stock: PropTypes.number.isRequired,  
    onAdd: PropTypes.func.isRequired,    
};

export default Counter;
