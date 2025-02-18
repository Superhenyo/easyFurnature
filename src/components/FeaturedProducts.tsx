import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import products from "../Data/Product";

// Function to shuffle and pick N random products
const getRandomFeaturedProducts = (count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Pick first 'count' items
};

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getRandomFeaturedProducts(3); // Change number to adjust how many to display

  return (
    <Row className="g-4">
      {featuredProducts.map((product) => (
        <Col key={product.id} md={4}>
          <Card className="fixed-card shadow-sm">
            <div className="image-container">
              <Card.Img variant="top" src={product.image} alt={product.name} />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center">{product.name}</Card.Title>
              <Card.Text className="flex-grow-1">
                {product.description}
              </Card.Text>
              <h5 className="text-center">${product.price.toFixed(2)}</h5>
              <Button variant="primary" className="mt-auto">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedProducts;
