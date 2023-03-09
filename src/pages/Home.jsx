import { useCallback } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(({ id, title, price, image }) => {
    dispatch(addToCart({ id, title, price, image, quantity: 1 }));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        {products?.map((product) => (
          <Col key={product.id} sm={6} md={4} className="mb-4">
            <ProductCard product={product} handleAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
