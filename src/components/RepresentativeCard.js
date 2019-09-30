import React, { Component } from "react";
import data from "../data/RepresentativeMembers"

class RepresentativeCard extends Component {
  render() {
  const repList = data.map(representative => {
  return (
  <div className="col-md-4" key={representative.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top about-image" style={{maxHeight: 262}} src={representative.image} alt="{representative.name}"></img>
    <div className="card-body">
      <h5>{representative.name}</h5>
      <p>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis feugiat elit, ac porta diam commodo non. In pulvinar neque dolor, sed vestibulum odio dapibus a. Curabitur turpis lacus, commodo eu purus sit amet, venenatis tristique ex. Donec sit amet mattis tellus, non hendrerit urna.</p>
      </p>
      <div class="col-mb-4 text-center">
        <a href="#" class="btn btn-primary">Learn More</a>
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
  return repList
}
}

export default RepresentativeCard;





