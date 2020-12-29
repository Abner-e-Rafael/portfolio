import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Main() {
  return (
    <div className="mainContainer">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Portfolio Conjunto</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Trabalhos</Nav.Link>
          <Nav.Link href="#features">Quem Somos</Nav.Link>
          <Nav.Link href="#pricing">Contato</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">
        Ola Mundo 3!
      </div>
    </div>
  );
}