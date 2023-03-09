import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const ProductCard = ({ product, handleAddToCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const addedProduct = cart.find((item) => item.id === product.id);

  return (
    <Card className="h-100">
      <Card.Img
        style={{ maxHeight: "300px", width: "100%", objectFit: "contain" }}
        variant="top"
        src={product.image}
        alt={product.title}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span className="text-ellips">{product.title}</span>
        </Card.Title>
        <Card.Text className="text-ellips">{product.description}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant={addedProduct ? "success" : "primary"}
            onClick={() => handleAddToCart(product)}
          >
            {addedProduct
              ? `Added In Cart (${addedProduct.quantity})`
              : "Add to Cart"}
          </Button>
          <span className="fw-bold">{product.price}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
