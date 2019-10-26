import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import { Timeline } from 'react-twitter-widgets'

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
      //console.log(this.props.page_num)
      let res = await axios(`https://api.congressand.me/api/Representatives?page=${this.props.page_num}`)
      await this.setState({rep_data : res.data.objects[parseInt(this.props.index)]});
      await console.log(this.state.rep_data)
    }
  
    render() {
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
                  <h4>{this.state.rep_data.name}</h4>
                  <h5>{this.state.rep_data.type}</h5>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                      >
                        About
                        <Timeline
                          dataSource={{
                          sourceType: 'profile',
                          screenName: this.state.rep_data.twitter
                          }}
                          options={{
                          username: 'TwitterDev',
                          height: '400'
                          }}
                          onLoad={() => console.log('Timeline is loaded!')}
                        />
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
                    <h3>Connect</h3>
                    <a>Contact: {`${this.state.rep_data.contact_form}`}</a>
                    <br />
                    <a href={`https://twitter.com/@${this.state.rep_data.twitter}`} target="_blank">Twitter</a>
                    <br />
                    <a href={`https://facebook.com/${this.state.rep_data.facebook}`} target="_blank">Facebook</a>
                    <br />
                    <a href={`https://www.youtube.com/${this.state.rep_data.youtube}`} target="_blank">YouTube</a>
                    <br />
                    <a href={this.state.rep_data.rss} target="_blank">RSS</a>
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
                        <p><Link to={`/state/${this.state.rep_data.state}`}>{this.state.rep_data.state}</Link></p>
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
