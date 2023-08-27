import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fs-5 text-black" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="fs-2 text-black fw-bold" as={Link} to="/">
            Teebay
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link className="fs-5 text-black" as={Link} to="/blogs">
                Blogs
              </Nav.Link> */}
              {user ? (
                <Nav.Link
                  className="fs-5 text-black"
                  as={Link}
                  onClick={logOut}
                  to="/"
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link className="fs-5 text-black" as={Link} to="/signin">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
