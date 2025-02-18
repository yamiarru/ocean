import { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // Importación corregida
import Button from "react-bootstrap/Button";
import imgCart from "../../assets/cart-fill.svg";
import CartContent from "../CartContent/CartContent";
import "./CartWidget.css";

const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="cart-button">
        <img src={imgCart} alt="Carrito de Compras" className="cart-icon" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
