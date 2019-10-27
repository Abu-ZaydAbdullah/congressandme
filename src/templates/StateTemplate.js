import React, {useState, useEffect} from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from "axios"

function StateTemplate() {
  const state_schema = {abbreviation: "", image: "", name: "", state_id: "", summary: "", website: ""}
  const temp_data = useLocation()
  const { name } = useParams()
  const [state_data, setStateData] = useState({...state_schema})
  const [rep_data, setRepresentativeData] = useState([])
  
  const getStateData = async() => {
    if (temp_data.state == undefined) {
    const req = await axios(`https://api.congressand.me/api/States?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`)
    const data = await req.data.objects
    await setStateData(data[0])
    } else {
    setStateData(temp_data.state)
    }
  }

  const getRepData = async() => {
    const req = await axios(`https://api.congressand.me/api/Representatives?q={"filters":[{"name":"state","op":"==","val":"${name}"}]}`)
    const data = await req.data.objects
    await setRepresentativeData(data)
  }

    useEffect(() => {
    getStateData()
    getRepData()
    }, [name]);

    const repList = rep_data.map((representative, index) => {
      return(
          <div className="col-md-4">
          <div className="card mb-4 box-shadow">
          <Link
              to={{
                pathname: `/representative/${index}`,
                state: {
                  name: representative.full_name,
                  chamber:
                    representative.type === "sen"
                      ? "Senate"
                      : "House of Representatives",
                  image: `https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`,
                  party: representative.party,
                  state: representative.state,
                  twitter: `https://twitter.com/@${representative.twitter}`,
                  facebook: `https://facebook.com/${representative.facebook}`,
                  youtube: `https://www.youtube.com/results?search_query=${representative.youtube}`,
                  rss: representative.rss_url,
                  website: representative.url,
                  form: representative.contact_form,
                  phone: `tel:${representative.phone}`,
                  summary: representative.bioguide_summary
                }
              }}
            >
              <img
                className="card-img-top about-image"
                style={{ maxHeight: 450 }}
                src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
                alt={representative.full_name}
              ></img>
            </Link>
            
            <div className="card-body">
              <h5>{representative.full_name}</h5>
              <p className="card-text">
                <strong>Party:</strong> {representative.party}
              </p>
              <p className="card-text">
                <strong>State:</strong> {representative.state}
              </p>
              <p className="card-text">
                <strong>Chamber:</strong>{" "}
                {representative.chamber === "sen"
                  ? "Senate"
                  : "House of Representatives"}
              </p>
              <p className="card-text">
                <strong>
                  <a href={`https://twitter.com/@${representative.twitter}`}>
                    Twitter:
                  </a>
                </strong>{" "}
                {representative.twitter !== ""
                  ? `@${representative.twitter}`
                  : "n/a"}
              </p>
              <p className="card-text">
                <strong>
                  <a href={`https://facebook.com/${representative.facebook}`}>
                    Facebook:
                  </a>
                </strong>{" "}
                {representative.facebook !== ""
                  ? `${representative.facebook}`
                  : "n/a"}
              </p>
              <div class="col-mb-4 text-center">
                <Link
                  to={{
                    pathname: `/representative/${index}`,
                    state: {
                      name: representative.full_name,
                      chamber:
                        representative.type === "sen"
                          ? "Senate"
                          : "House of Representatives",
                      image: `https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`,
                      party: representative.party,
                      state: representative.state,
                      twitter: `https://twitter.com/@${representative.twitter}`,
                      facebook: `https://facebook.com/${representative.facebook}`,
                      youtube: `https://www.youtube.com/results?search_query=${representative.youtube}`,
                      rss: representative.rss_url,
                      website: representative.url,
                      form: representative.contact_form,
                      phone: `tel:${representative.phone}`,
                      summary: representative.bioguide_summary
                    }
                  }}
                >
                  <a class="btn btn-light">Learn More</a>
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group"></div>
              </div>
            </div>
          </div>
        </div>
      );
  })

    return (
            <div>
                <div className="container emp-profile">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={state_data.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="profile-head">
                        <h1>{state_data.name}</h1>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            <a>
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
                            <a href={state_data.website} target="_blank">Website</a>
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
                            </div>
                            <div className="col-md-12">
                                <p style={{color: 'black'}}>{state_data.summary}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="row mb-5">
                    <h1>The Following Issues are Important in this State:</h1>
                    <div className="panel panel-default">
                        <div className="card-body row">    
                            <div class = "col-sm-6 col-md-6 image-container">
                                <img className="card-img-top about-image" style={{width: 262}} src={issue_data.image} alt="Card image cap"></img>
                            </div>
                            <div className="col-sm-6 col-md-6" >
                                <h5>{issue_data.name}</h5>
                                <p className="card-text">{issue_data.desc}</p>
                                <Link
                                to={{
                                    pathname: `/issue/${issue_data.name}/1/0`
                                }}
                                >
                                <a class="btn btn-dark">{issue_data.name}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                */}
                <div className="row mb-5">
                    <h1>This State's Representatives!</h1>
                    {repList}
                </div>
            </div> 
          );
        }

export default StateTemplate;