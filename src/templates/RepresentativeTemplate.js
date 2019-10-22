import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios"

class RepresentativeTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      rep_data : {
        bioguide_id: "",
        bioguide_summary: "",
        chamber: "",
        contact_form: "",
        district: "",
        facebook: "",
        full_name: "",
        issues: "",
        party: "",
        phone: "",
        rss_url: "",
        senate_class: "",
        state: "",
        twitter: "",
        url: "",
        youtube: ""
      }
    }
  }

  componentDidMount()
  {
    this.fetchReps()
  }

  fetchReps = async() => {
    let rep_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1];
    let res = await axios("http://localhost:5000/api/Representatives?page=1")
    this.setState({rep_data : res.data.objects[parseInt(rep_id)]});
    //console.log(this.state.rep_data)
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${this.state.rep_data.bioguide_id}.jpg`} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-head">
                <h4>{this.state.rep_data.full_name}</h4>
                <h5>{this.state.rep_data.chamber}</h5>
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
                  <a href={this.state.rep_data.url} target="_blank">Website</a>
                  <br />
                  <a href={this.state.rep_data.contact_form} target="_blank">Email</a>
                  <br />
                  <a href={`tel:${this.state.rep_data.phone}`} target="_blank">Phone</a>
                  <p>Social Media</p>
                  <a href={`https://twitter.com/@${this.state.rep_data.twitter}`} target="_blank">Twitter</a>
                  <br />
                  <a href={`https://facebook.com/${this.state.rep_data.facebook}`} target="_blank">Facebook</a>
                  <br />
                  <a href={`https://www.youtube.com/results?search_query=${this.state.rep_data.youtube}`} target="_blank">YouTube</a>
                  <br />
                  <a href={this.state.rep_data.rss_url} target="_blank">RSS</a>
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
                      <p>{this.state.rep_data.party}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>State</label>
                    </div>
                    <div className="col-md-6">
                      <p><Link to={`/state${this.state.rep_data.state}`}>{this.state.rep_data.state}</Link></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Chamber</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.rep_data.chamber}</p>
                    </div>
                    <div className="col-md-6">
                      <label>Summary: (Courtesy of <a href="http://bioguide.congress.gov" target="_blank">BioGuide</a>)</label>
                    </div>
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-12">
                      <p>{this.state.rep_data.bioguide_summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepresentativeTemplate;
