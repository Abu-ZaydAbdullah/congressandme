import React, { Component } from "react";
import styled from 'styled-components';
import data from "../data/IssueData"

class IssueCard extends Component {
  render() {
  const issueList = data.map(member => {
  return (
  <div className="col-md-4" key={member.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top about-image" style={{maxHeight: 262}} src={member.image} alt="Card image cap"></img>
    <div className="card-body">
      <h5><strong>{member.name}</strong></h5>
      <p className="card-text">{member.desc}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
    )
  return issueList
}
}

export default IssueCard;

