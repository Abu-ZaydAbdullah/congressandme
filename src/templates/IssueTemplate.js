import React, {useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios"


function IssueTemplate() {
    const issue_schema = {abbreviation: "", about: "", description: "", image: "", issue_id: "", name: "", vids: ""}
    const temp_data = useLocation()
    const { name } = useParams()
    const [issue_data, setIssueData] = useState({...issue_schema})
    
    const getIssueData = async() => {
      if (temp_data.state == undefined) {
      const req = await axios(`https://api.congressand.me/api/Issues?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`)
      const data = await req.data.objects
      await setIssueData(data[0])
      } else {
      setIssueData(temp_data.state)
      }
    }

    const getRepData = async() => {
        if (temp_data.state == undefined) {
        const req = await axios(`https://api.congressand.me/api/Issues?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`)
        const data = await req.data.objects
        await setIssueData(data[0])
        } else {
        setIssueData(temp_data.state)
        }
      }
  
      useEffect(() => {
      getIssueData()
      }, [name]);

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