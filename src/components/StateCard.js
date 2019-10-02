import React, { Component } from "react";
import data from "../data/StateData"

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
        <a href="#" class="btn btn-primary">{state.name}</a>
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





