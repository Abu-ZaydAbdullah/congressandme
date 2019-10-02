import React from "react";
import data from "../data/IssueData";
import stateData from "../data/StateData";

class StateTemplate extends React.Component
{
    constructor(props)
    {
        super(props)
        this.props = {
            name: "",
            image: "",
            website: "",
            summary: "",
            issues: "0",
            Facebook: ""
        }
        this.props = props
    }
    render()
    {
        let pathParts = window.location.pathname.split("/");
        let stateId = pathParts[pathParts.length - 1];
        this.props = stateData[stateId];
        let member = data[this.props.issues];
        return (
            <main role="main">
                <div>
                <div className="container emp-profile">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={this.props.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="profile-head">
                        <h5>{this.props.name}</h5>
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
                            <a href={this.props.website} target="_blank">Website</a>
                            <br />
                            <p>Social Media</p>
                            <a href={this.props.Facebook} target="_blank">Facebook</a>
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
                                <p style={{color: 'black'}}>{this.props.summary}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mb-5">
                <h1>The Following Issues are Important in this State:</h1>
                <div className="panel panel-default">
                    <div className="card-body row">    
                        <div class = "col-sm-6 col-md-6 image-container">
                            <img className="card-img-top about-image" style={{width: 262}}src={member.image} alt="Card image cap"></img>
                        </div>
                        <div className="col-sm-6 col-md-6" >
                            <h5>{member.name}</h5>
                            <p className="card-text">{member.desc}</p>
                            <a href="../IssueInst" button type="button">Click Me!</a>
                        </div>
                    </div>
                </div>
            </div>
            </main>
          );
    }
}
// const StateTemplate = props => {
//     let member = data[props.location.status.issues];
//   return (
//     <main role="main">
//         <div>
//         <div className="container emp-profile">
//             <div className="row">
//             <div className="col-md-4">
//                 <div className="profile-img">
//                 <img src={props.location.status.image} alt="" />
//                 </div>
//             </div>
//             <div className="col-md-4">
//                 <div className="profile-head">
//                 <h5>{props.location.status.name}</h5>
//                 <ul className="nav nav-tabs" id="myTab" role="tablist">
//                     <li className="nav-item">
//                     <a>
//                         About
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </div>
//             <div className="col-md-4"></div>
//             <div className="row">
//             <div className="col-md-4">
//                 <div className="shifted">
//                 <div className="profile-work">
//                     <p>Contact</p>
//                     <a href={props.location.status.website} target="_blank">Website</a>
//                     <br />
//                     <p>Social Media</p>
//                     <a href={props.location.status.Facebook} target="_blank">Facebook</a>
//                 </div>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <div className="tab-content profile-tab" id="myTabContent">
//                 <div
//                     className="tab-pane fade show active"
//                     id="home"
//                     role="tabpanel"
//                     aria-labelledby="home-tab"
//                 >
//                     <div className="row">
//                     <div className="col-md-6">
//                     </div>
//                     <div className="col-md-12">
//                         <p style={{color: 'black'}}>{props.location.status.summary}</p>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//         <div className="row mb-5">
//         <h1>The Following Issues are Important in this State:</h1>
//         <div className="panel panel-default">
//             <div className="card-body row">    
//                 <div class = "col-sm-6 col-md-6 image-container">
//                     <img className="card-img-top about-image" style={{width: 262}}src={member.image} alt="Card image cap"></img>
//                 </div>
//                 <div className="col-sm-6 col-md-6" >
//                     <h5>{member.name}</h5>
//                     <p className="card-text">{member.desc}</p>
//                     <a href="../IssueInst" button type="button">Click Me!</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </main>
//   );
// };

export default StateTemplate;