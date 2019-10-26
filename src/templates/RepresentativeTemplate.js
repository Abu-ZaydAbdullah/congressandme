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
        },

      state_data : {
        abbreviation: "",
        name: "",
        image: "",
        website: "",
        summary: "",
        state_id: ""
      },

      mentions_data : [],

      issue_data : []
      }
    }
    componentDidMount()
    {
      this.fetchReps()
    }
  
    fetchReps = async() => {
      //console.log(this.props.page_num)
      let res = await axios(`https://api.congressand.me/api/Representatives?page=${this.props.page_num}`)
        await this.setState({rep_data : await res.data.objects[parseInt(this.props.index)]});
        await console.log(this.state.rep_data)
        // let res2 = await axios(`https://api.congressand.me/api/Mentions?q={"filters":[{"name":"abbreviation","op":"eq","val":"${this.state.rep_data.abbreviation}"}]}`)
        // await this.setState({mentions_data : await res2.data.objects})
        // await console.log(this.state.mention_data)
        // let res3 = await axios(`https://api.congressand.me/api/Issues?page=1`)
        // await this.setState({issue_data : await res3.data.objects[1]});
        // await console.log(this.state.issue_data)
        let res4 = await axios(`https://api.congressand.me/api/States?q={"filters":[{"name":"abbreviation","op":"eq","val":"${this.state.rep_data.state}"}]}`)
        await this.setState({state_data : await res4.data.objects[0]})
        await console.log(this.state.state_data)
    }
  
    render() {
      console.log(this.state.state_data)
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
                    <p>Contact</p>
                    <a href={this.state.rep_data.website} target="_blank">Website</a>
                    <br />
                    <a href={this.state.rep_data.form} target="_blank">Email</a>
                    <br />
                    <a href={this.state.rep_data.phone} target="_blank">Phone</a>
                    <p>Social Media</p>
                    <a href={this.state.rep_data.twitter} target="_blank">Twitter</a>
                    <br />
                    <a href={this.state.rep_data.facebook} target="_blank">Facebook</a>
                    <br />
                    <a href={this.state.rep_data.youtube} target="_blank">YouTube</a>
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
                        <p>
                        <Link to={{
                          pathname: `/state/${this.state.rep_data.state}/${Math.floor((this.state.state_data.state_id - 1) / 10)}/${(this.state.state_data.state_id-1) % 10}`,
                          state: {
                            name: this.state.state_data.name,
                            image: this.state.state_data.image,
                            website: this.state.state_data.website,
                            summary: this.state.state_data.summary,
                            issues: this.state.state_data.issues,
                            facebook: this.state.state_data.facebook
                          }
                        }}
                      >
                      {this.state.rep_data.state}
                      </Link>
                      </p>
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
              <div className="row mb-5">
                    <h1>The Following Issues are Important in this Representative:</h1>
                    <div className="panel panel-default">
                        <div className="card-body row">    
                            <div class = "col-sm-6 col-md-6 image-container">
                                <img className="card-img-top about-image" style={{width: 262}} src={this.state.issue_data.image} alt="Card image cap"></img>
                            </div>
                            <div className="col-sm-6 col-md-6" >
                                <h5>{this.state.issue_data.name}</h5>
                                <p className="card-text">{this.state.issue_data.desc}</p>
                                <Link
                                to={{
                                    pathname: `/issue/${this.state.issue_data.name}/1/0`
                                }}
                                >
                                <a class="btn btn-dark">{this.state.issue_data.name}</a>
                                </Link>
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
