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
        <Navbar key={expand} expand={expand} className={styles.navbar}>
          <Container>
            <Navbar.Brand href='/'>
              <img
                src='./images/logo.svg'
                alt='Luis Logo'
                className={styles.logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className={styles.menu_side_tit}
                >
                  Luis Olivares Sandoval
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={`justify-content-end flex-grow-1 pe-3 ${styles.menu_items}`}
                >
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='biography'>Biography</Nav.Link>
                  <Nav.Link href='repertoire'>Repertoire</Nav.Link>
                  {/* <Nav.Link href='schedule'>Schedule</Nav.Link>
                  <Nav.Link href='videos'>Videos</Nav.Link> */}
                  <Nav.Link href='contact'>Contact</Nav.Link>
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
