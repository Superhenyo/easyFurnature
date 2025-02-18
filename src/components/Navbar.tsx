import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="/">EasyFurnature</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Custom Creation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Gallery </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Testimonials </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
