import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedProducts from "../components/FeaturedProducts";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container fluid className="p-0 m-0 landing-container position-relative">
        <Row className="m-0">
          {/* Background Image */}
          <img
            src="/assets/LandingPage.webp"
            alt="Furniture Display"
            className="img-fluid w-100 p-0 landing-image"
          />

          {/* Overlay Text and Button */}
          <Col
            xs={10}
            md={8}
            className="motto-container text-center text-white position-absolute top-50 start-50 translate-middle"
          >
            <h3 className="fw-bold text-wrap text-uppercase d-inline-block">
              Gawa ng Kakaibang Kaginhawaan, Para sa Iyong Pangarap na Tahanan
            </h3>
            <button className="btn btn-primary mt-3">Shop Now</button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="feature-container">
        <Row className="m-0 mt-5 d-flex justify-content-center">
          <h1 className="featured-title">Featured Products</h1>
          <FeaturedProducts />
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
