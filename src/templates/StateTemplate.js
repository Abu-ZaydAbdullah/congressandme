import React from "react";
import { Link } from "react-router-dom";

const StateTemplate = props => {
        console.log(props)
        return (
            <main role="main">
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
                        <h1>{props.location.state.name}</h1>
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
                            <a href={props.location.state.website} target="_blank">Website</a>
                            <br />
                            <p>Social Media</p>
                            <a href={props.location.state.facebook} target="_blank">Facebook</a>
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
                                <p style={{color: 'black'}}>{props.location.state.summary}</p>
                            </div>
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
                            <img className="card-img-top about-image" style={{width: 262}}src={member.image} alt="Card image cap"></img>
                        </div>
                        <div className="col-sm-6 col-md-6" >
                            <h5>{member.name}</h5>
                            <p className="card-text">{member.desc}</p>
                            <Link
                            to={{
                                pathname: `/issue/${props.location.state..issues}`,
                                status: {
                                name: member.name,
                                desc: member.desc,
                                image: member.image,
                                states: member.states,
                                reps: member.rep,
                                vids: member.vids,
                                }
                            }}
                            >
                            <a class="btn btn-dark">{member.name}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <h1>This State's Representatives!</h1>
            <div className="col-md-4" key={representative.index}>
                <div className="card mb-4 box-shadow">
                    <img
                    className="card-img-top about-image"
                    style={{ maxHeight: 450 }}
                    src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
                    alt="{representative.full_name}"
                    ></img>
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
                        {representative.type === "sen"
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
                            pathname: `/representative/${representative.full_name}`,
                            state: {
                            name: representative.full_name,
                            chamber:
                                representative.type === "sen"
                                ? "Senate"
                                : "House of Representatives",
                            type:
                                representative.type === "sen"
                                ? "Senator"
                                : "Representative",
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
                    </div> */}
                {/* </div> */}
                {/* </div> */}
            </main>
          );
    }

export default StateTemplate;