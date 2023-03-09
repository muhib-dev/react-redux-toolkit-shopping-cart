import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { calculateGrandTotal } from "../../utils/cartHealper";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

const CartItems = ({ cart = [], show, handleClose, ...props }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <>
      <Offcanvas
        scroll={true}
        show={show}
        onHide={handleClose}
        placement="end"
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <div style={{ maxHeight: "80dvh", overflow: "auto", flex: "1" }}>
            {!cart.length > 0 && <h2 className="text-center">Cart is empty</h2>}

            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px" }}
                  />

                  <div>
                    <Button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      variant="text"
                    >
                      <i className="bi bi-plus fs-5"></i>
                    </Button>
                    <strong>{item.quantity}</strong>

                    <Button
                      disabled={item.quantity === 1}
                      onClick={() => handleDecreaseQuantity(item.id)}
                      variant="text"
                    >
                      <i className="bi bi-dash fs-5"></i>
                    </Button>
                  </div>

                  <span>{(item.price * item.quantity).toFixed(2)}/-</span>

                  <Button onClick={() => handleRemove(item.id)} variant="text">
                    <i className="bi bi-trash3-fill text-danger"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          {cart.length > 0 && (
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h4>Total</h4>
              <h4>{calculateGrandTotal(cart).toFixed(2)}/-</h4>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartItems;
