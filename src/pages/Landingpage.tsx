import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedProducts from "../components/FeaturedProducts";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container fluid className="p-0 m-0 landing-container ">
        <Row className="m-0">
          <Col
            xs={12}
            md={6}
            className="landing-image-container d-flex align-items-center justify-content-center"
          >
            <img
              src="/public/assets/e1f379c3-06d3-43b1-9f68-8c4cbd71d698.png"
              alt="Furniture Display"
              className="img-fluid"
            />
          </Col>

          <Col
            xs={12}
            md={6}
            className="text-container d-flex flex-column align-items-center justify-content-center"
          >
            <div className="motto-container text-center">
              <h3>
                Gawa ng Kakaibang Kaginhawaan, Para sa Iyong Pangarap na Tahanan
              </h3>
            </div>
            <button className="btn btn-primary">Shop Now</button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="feature-container ">
        <Row className="m-0 mt-5 d-flex justify-content-center">
          <h1 className="featured-title">Featured Products</h1>
          <FeaturedProducts />
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
