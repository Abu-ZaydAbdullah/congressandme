import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #007bff;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fdfdfd;
    font-weight: 500;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Congress and Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/" className=".HomeLink">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/representatives/page/1">Representatives</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/states/page/1">States</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/issues/page/1">Issues</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
