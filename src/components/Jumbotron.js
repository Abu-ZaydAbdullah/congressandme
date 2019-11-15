import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

class Jumbotron extends Component {
  render() {
    const Styles = styled.div`
      .jumbo {
        background: url(${this.props.image}) no-repeat fixed bottom;
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
    return (
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container>
            <h1 className="text-center">{this.props.title_text}</h1>
            <p className="text-center">{this.props.subtitle_text}</p>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
