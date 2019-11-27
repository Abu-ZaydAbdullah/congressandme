import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar expand="lg" style={{ backgroundColor: "#007bff" }}>
    <Navbar.Brand href="/" style={{ color: "#fdfdfd", fontWeight: "500" }}>
      Congress and Me
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link
            href="/"
            className=".HomeLink"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/representatives/page/1"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            Representatives
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/states/page/1"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            States
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/issues/page/1"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            Issues
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/visualizations"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            Visualizations
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/about"
            style={{ color: "#fdfdfd", fontWeight: "500" }}
          >
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
