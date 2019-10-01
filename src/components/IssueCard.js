import React, { Component } from "react";
import styled from 'styled-components';
import data from "../data/IssueData";

class IssueCard extends Component {
  render() {
  const issueList = data.map(member => {
  return (
    <div className="row mb-5" key={member.index}>
        <div className="panel panel-default">
            <div className="card-body row">    
                <div class = "col-sm-6 col-md-6 image-container">
                    <img className="card-img-top about-image" style={{width: 262}}src={member.image} alt="Card image cap"></img>
                </div>
                <div className="col-sm-6 col-md-6" >
                    <h5>{member.name}</h5>
                    <p className="card-text">{member.desc}</p>
                    <a href="./IssueInst" button type="button">Click Me!</a>
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

