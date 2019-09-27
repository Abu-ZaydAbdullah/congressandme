import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import congressImage from '../assets/congress_image.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${congressImage}) no-repeat fixed bottom;
    background-size: contain;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="text-center">Welcome</h1>
        <p className="text-center">Other Text Goes Here</p>
      </Container>
    </Jumbo>
  </Styles>
)
