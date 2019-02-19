import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Header extends Component {

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"> <Link to="/">Home </Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/about"> Nosotros </Link></Nav.Link>
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Plan Simple</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Upgrade! </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pro!</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Preguntas?</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
              <Button variant="outline-danger">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    )
  }
}

export default Header
