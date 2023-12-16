// Header.js
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
