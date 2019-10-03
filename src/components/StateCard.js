import React, { Component } from "react";
import data from "../data/StateData";
import { Link } from "react-router-dom";

class StateCard extends Component {
  render() {
  const stateList = Object.keys(data).map(key => {
    let state = data[key];
    return (
  <div className="col-md-4" key={state.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top" style={{maxHeight: 160}} src={state.image} alt="{state.name}"></img>
    <div className="card-img-overlay">
      <div class="col-mb-4 text-center" style={{marginTop: "12%"}}>
        <Link
          to={{
            pathname: `/state/${state.index}`,
            status: {
              name: state.name,
              image: state.image,
              website: state.website,
              summary: state.summary,
              issues: state.issues,
              Facebook: state.facebook
            }
          }}
        >
          <a class="btn btn-dark">{state.name}</a>
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
  </div>
  )
  }
    )
  return stateList
}
}

export default StateCard;





