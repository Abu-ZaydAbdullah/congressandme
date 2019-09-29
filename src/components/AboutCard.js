import React, { Component } from "react";
import data from "../data/GroupMembers"

class AboutCard extends Component {
  render() {
  const aboutList = data.map(member => {
  return (
  <div className="col-md-4" key={member.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top" src={member.image} alt="Card image cap"></img>
    <div className="card-body">
      <h5>{member.name}</h5>
      <p>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis feugiat elit, ac porta diam commodo non. In pulvinar neque dolor, sed vestibulum odio dapibus a. Curabitur turpis lacus, commodo eu purus sit amet, venenatis tristique ex. Donec sit amet mattis tellus, non hendrerit urna.</p>
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
    )
  return aboutList
}
}

export default AboutCard;





