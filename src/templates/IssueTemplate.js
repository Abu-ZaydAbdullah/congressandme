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
        //let pathParts = window.location.pathname.split("/");
        //let stateId = pathParts[pathParts.length - 1];
        //this.props = stateData[stateId];
        //let member = data[this.props.issues];
        return (
            <main role="main">
                
            </main>
          );
    }
}

export default IssueTemplate;