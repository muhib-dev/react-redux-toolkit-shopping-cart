import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "../utils/cartHealper";
import CartItems from "./cart/CartItems";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const totalQuantity = calculateTotalQuantity(cart);

  const [showCart, setShowCart] = useState(false);
  const handleCartClose = useCallback(() => setShowCart(false), []);

  return (
    <>
      <Navbar className="py-3" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>Shopping Cart App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button
              onClick={() => setShowCart(true)}
              className="position-relative"
            >
              <i className="bi bi-basket fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQuantity}
              </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartItems cart={cart} show={showCart} handleClose={handleCartClose} />
    </>
  );
};

export default Header;
