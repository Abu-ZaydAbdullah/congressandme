import React, { Component } from "react";
import styled from 'styled-components';
import data from "../data/PoliticalMembers"

class PoliticianCard extends Component {
  render() {
  const polList = data.map(politician => {
  return (
  <div className="col-md-4" key={politician.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top about-image" style={{maxHeight: 262}} src={politician.image} alt="Card image cap"></img>
    <div className="card-body">
      <h5>{politician.name}</h5>
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
  return polList
}
}

export default PoliticianCard;





