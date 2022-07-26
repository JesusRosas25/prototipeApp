import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthNav from "./auth-nav";
const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Catalogo
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
    >
      Pedidos
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/configuracion"
      exact
      activeClassName="router-link-exact-active"
    >
      Configuración
    </Nav.Link>
  </Nav>
);



const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
