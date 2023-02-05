import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import "../pages/styles/wisata.css"

const Navigation = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
    // console.log(url);
  }, [location]);

  return (
    <>
      {/* <Router> */}
      <Navbar variant="light" sticky="top" collapseOnSelect expand='sm' style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", backgroundColor: '#FFFFFF' }}>
        <Container>
          <NavbarBrand href="#home">
            <Link className='brand' to="/">
              <h3 className='fw-semibold'>SIPINTER</h3>
              <small>Sistem Informasi Manajemen Terminal Ciamis</small>
            </Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className={"navlink" + (url === "/" ? " active" : "")} to="/" style={{ fontSize: '18px' }}>
                  Info
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"navlink" + (url === "/trayek" ? " active" : "")} to="/trayek" style={{ fontSize: '18px' }}>
                  Trayek
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"navlink" + (url === "/wisata" ? " active" : "")} to="/wisata" style={{ fontSize: '18px' }}>
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
