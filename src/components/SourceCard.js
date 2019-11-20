import React, { Component } from "react";
import data from "../data/SourceData";

class SourceCard extends Component {
  render() {
    const sourceList = data.map(source => {
      return (
        <div className="col-md-4" key={source.index}>
          <div className="card mb-4 box-shadow text-center">
            <img
              className="card-img-top about-image mx-auto"
              style={{ minHeight: 240, padding: 20 }}
              src={source.image}
              alt="{source.name}"
            ></img>
            <div className="card-body">
              <h5>
                <a href={source.url}>{source.name}</a>
              </h5>
              <div>
                <p className="card-text">{source.purpose}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group"></div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{sourceList}</div>
      </div>
    );
  }
}

export default SourceCard;
