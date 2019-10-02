import React from "react";
import Jumbotron from "../components/Jumbotron";

const RepresentativeTemplate = props => {
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
              <h5>{props.location.state.name}</h5>
              <h6>{props.location.state.type}</h6>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
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
                <a href={props.location.state.website}>Website</a>
                <br />
                <a href={props.location.state.form}>Email</a>
                <br />
                <a href={props.location.state.phone}>Phone</a>
                <p>Social Media</p>
                <a href={props.location.state.twitter}>Twitter</a>
                <br />
                <a href={props.location.state.facebook}>Facebook</a>
                <br />
                <a href={props.location.state.youtube}>YouTube</a>
                <br />
                <a href={props.location.state.rss}>RSS</a>
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
                    <p>{props.location.state.state}</p>
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
                    <label>Summary: (Courtesy of <a href="http://bioguide.congress.gov">BioGuide</a>)</label>
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

