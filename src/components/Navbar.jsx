import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";

import "../pages/styles/wisata.css"

const Navigation = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      {/* <Router> */}
      <Navbar variant="light" collapseOnSelect  expand='sm' style={{ boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)" }}>
        <Container>
          <NavbarBrand href="#home">
            <Link className='brand' to="/">
              <h3>Sipintar</h3>
              <small>Sistem Informasi Manajemen Terminal Ciamis</small>
            </Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className={"navlink" + (url === "/blog" ? " active" : "")} to="/blog">
                  Info
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"navlink" + (url === "/trayek" ? " active" : "")} to="/trayek">
                  Trayek
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"navlink" + (url === "/wisata" ? " active" : "")} to="/wisata">
                  Wisata
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
