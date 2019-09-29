import React, { Component } from "react";
import styled from 'styled-components';
import data from "../data/GroupMembers"

class ContactCard extends Component {
  render() {
  const contactList = data.map(member => {
  return (
  <div className="col-md-4" key={member.index}>
  <div className="card mb-4 box-shadow">
    <img className="card-img-top about-image" style={{maxHeight: 262}} src={member.image} alt="Card image cap"></img>
    <div className="card-body">
      <h5>{member.name}</h5>
      <p className="card-text"><strong>Email:</strong> {member.email}</p>
      <p className="card-text"><strong>GitlabID:</strong> {member.gitlab_id}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
    )
  return contactList
}
}

export default ContactCard;





