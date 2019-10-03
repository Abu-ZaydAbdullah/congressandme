import React from "react";
import data from "../data/IssueData";
import stateData from "../data/StateData";
import repData from "../data/RepresentativeMembers";
import { Link } from "react-router-dom";

class IssueTemplate extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props = {
            name: "",
            desc: "",
            image: "",
            states: 0,
            rep: 0,
        }
        this.props = props
    }
    render()
    {
        let pathParts = window.location.pathname.split("/");
        let issueId = pathParts[pathParts.length - 1];
        this.props = data[issueId];
        let state = stateData[this.props.states];
        let representative = repData[this.props.reps];
        return (
            <main role="main">
                <div>
                    <div className = "container emp-profile">
                        <div className = "row justify-content-left">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img style={{height: 180}} src={this.props.image}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.name}</h1>
                                <hr></hr>
                                <p>{this.props.about}</p>
                            </div>
                        </div>
                        <div className="row justify-content-left pt-5 ">
                            <h1>This issue is important in the following states!</h1>
                        </div>
                        <div className="panel panel-default pt-5">
                            <div className="col-md-4" key={state.index}>
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" style={{maxHeight: 160}} src={state.image} alt="{state.name}"></img>
                                    <div className="card-img-overlay">
                                        <div class="col-mb-4 text-center" style={{marginTop: "12%"}}>
                                            <Link
                                            to={{
                                                pathname: `/state/${state.index}`,
                                                status: {
                                                name: state.name,
                                                image: state.image,
                                                website: state.website,
                                                summary: state.summary,
                                                issues: state.issues,
                                                Facebook: state.facebook
                                                }
                                            }}
                                            >
                                            <a class="btn btn-dark">{state.name}</a>
                                            </Link>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-left pt-5 ">
                            <h1>This issue is important to the following politicians!</h1>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default IssueTemplate;