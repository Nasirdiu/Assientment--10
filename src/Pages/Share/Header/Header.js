import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingOut=()=>{
    signOut(auth);
  }
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sports Photographer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            {
            user?<button className="btn btn-link text-light text-decoration-none" onClick={handleSingOut}>Sing Out</button>:
              
              <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            }
            <Nav.Link as={Link} to="/singUp">
              Sing Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
