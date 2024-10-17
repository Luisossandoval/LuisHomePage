import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3'>
          <Container fluid>
            <Navbar.Brand href='/'>
              <img src='../logo.svg' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Luis Olivares Sandoval
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='biography'>Biography</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;
