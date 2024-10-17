import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import styles from "AppLayout.module.css";

const AppLayout = () => {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark' className={styles.menu_items}>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='biography'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
