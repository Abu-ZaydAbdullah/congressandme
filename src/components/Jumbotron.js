import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

class Jumbotron extends Component {
  render() {
    return (
      <Jumbo
        fluid
        className="jumbo"
        style={{
          background: `url(${this.props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="overlay"></div>
        <Container>
          <h1 className="text-center">{this.props.title_text}</h1>
          <p className="text-center">{this.props.subtitle_text}</p>
        </Container>
      </Jumbo>
    );
  }
}

export default Jumbotron;
