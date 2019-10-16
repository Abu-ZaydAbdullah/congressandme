import React from "react";
import { Link } from 'react-router-dom';
import Jumbotron from "../components/Jumbotron";

const RepresentativeTemplate = props => {
  let repToState = (repState) => {
    if (repState === 'OH') {
    return '/34'
    } else if (repState === 'CA') {
    return '/4'
    } else if (repState === 'VT') {
    return '/44'
    }
    return 's/'
    }
  
  const stateVal = repToState(props.location.state.state)

  return (
    <div>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={props.location.state.image} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-head">
              <h4>{props.location.state.name}</h4>
              <h5>{props.location.state.type}</h5>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="row">
          <div className="col-md-4">
            <div className="shifted">
              <div className="profile-work">
                <p>Contact</p>
                <a href={props.location.state.website} target="_blank">Website</a>
                <br />
                <a href={props.location.state.form} target="_blank">Email</a>
                <br />
                <a href={props.location.state.phone} target="_blank">Phone</a>
                <p>Social Media</p>
                <a href={props.location.state.twitter} target="_blank">Twitter</a>
                <br />
                <a href={props.location.state.facebook} target="_blank">Facebook</a>
                <br />
                <a href={props.location.state.youtube} target="_blank">YouTube</a>
                <br />
                <a href={props.location.state.rss} target="_blank">RSS</a>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Party</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.location.state.party}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>State</label>
                  </div>
                  <div className="col-md-6">
                    <p><Link to={`/state${stateVal}`}>{props.location.state.state}</Link></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Chamber</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.location.state.chamber}</p>
                  </div>
                  <div className="col-md-6">
                    <label>Summary: (Courtesy of <a href="http://bioguide.congress.gov" target="_blank">BioGuide</a>)</label>
                  </div>
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-12">
                    <p>{props.location.state.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeTemplate;
