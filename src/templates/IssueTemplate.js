import React from "react";
import data from "../data/IssueData";
import stateData from "../data/StateData";

class IssueTemplate extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props = {
            name: "",
            desc: "",
            image: "",
        }
        this.props = props
    }
    render()
    {
        let pathParts = window.location.pathname.split("/");
        let issueId = pathParts[pathParts.length - 1];
        this.props = data[issueId];
        //let member = data[this.props.issues];
        return (
            <main role="main">
                <div>
                    <div className = "container emp-profile">
                        <div className = "row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img style={{height: 180}} src={this.props.image}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.name}</h1>
                                <ul className="nav nav-tabs" id="myTab" role="tablist"></ul>
                                <p>{this.props.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default IssueTemplate;