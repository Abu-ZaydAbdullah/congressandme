import React from "react";
import { useLocation } from 'react-router-dom';


function IssueTemplate() {
    console.log(useLocation())
    const issue_data = {...(useLocation().state)}
    return (
        <main role="main">
            <div>
                <div className = "container emp-profile">
                    <div className = "row justify-content-left">
                        <div className="col-md-4">
                            <div>
                                <img style={{height: 180}} src={issue_data.image}/>
                            </div>
                            <div className="row">
                                <p><a href={issue_data.vids} target="_blank">Trevor Noah on {issue_data.name}</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>{issue_data.name}</h1>
                            <hr></hr>
                            <p>{issue_data.about}</p>
                        </div>
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important in the following states!</h1>
                    </div>
                    <div className="panel panel-default pt-5">
                    </div>
                    <div className="row justify-content-left pt-5 ">
                        <h1>This issue is important to the following politicians!</h1>
                    </div>
            </div>
            </div>
        </main>
    );

        }
export default IssueTemplate;