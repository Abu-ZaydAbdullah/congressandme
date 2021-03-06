import React, { useState, useEffect } from "react";
import RepresentativeCard from "../components/RepresentativeCard";
import { useLocation, useParams } from "react-router-dom";
import IssueCard from "../components/IssueCard";
import axios from "axios";

function StateTemplate() {
  const state_schema = {
    abbreviation: "",
    image: "",
    name: "",
    state_id: "",
    summary: "",
    website: ""
  };
  const temp_data = useLocation();
  const { name } = useParams();
  const [state_data, setStateData] = useState({ ...state_schema });
  const [rep_data, setRepresentativeData] = useState([]);
  const [issuesMentioned, setIssuesMentioned] = useState([]);
  const [issue_data, setIssueData] = useState([]);

  const getStateData = async () => {
    if (temp_data.state === undefined) {
      const req = await axios(
        `https://api.congressand.me/api/States?q={"filters":[{"name":"abbreviation","op":"==","val":"${name}"}]}`
      );
      const data = await req.data.objects;
      await setStateData(data[0]);
    } else {
      setStateData(temp_data.state);
    }
  };

  const getRepData = async () => {
    const req = await axios(
      `https://api.congressand.me/api/Representatives?q={"filters":[{"name":"state","op":"==","val":"${name}"}]}`
    );
    const data = await req.data.objects;
    await setRepresentativeData(data);
    const isList = [];
    // Grab only the issues relavent to this state
    const unused = data.map(rep => {
      const temp = rep.issues.split(",").map(issue => {
        if (isList.indexOf(issue) == -1) {
          isList.push(issue);
        }
      });
    });
    await setIssuesMentioned(isList);
    const req2 = await axios(
      `https://api.congressand.me/api/Issues?results_per_page=31`
    );
    // Filter out irrelavent issues from list
    const data2 = await req2.data.objects;
    const final_data = data2.filter(
      issue => isList.indexOf(issue.abbreviation) > -1
    );
    await setIssueData(final_data);
  };

  useEffect(() => {
    getStateData();
    getRepData();
    window.scrollTo(0, 0);
  }, [name]);

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
                  <a>About</a>
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
                <a href={state_data.website} target="_blank">
                  Website
                </a>
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
                  <div className="col-md-6"></div>
                  <div className="col-md-12">
                    <p style={{ color: "black" }}>{state_data.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <h1>This State's Representatives!</h1>
        <RepresentativeCard representatives={rep_data} filterText={""} />
        <div className="row mb-5">
          <h1>Issues relevant to this state:</h1>
          <div className="container">
            <div className="row">
              <IssueCard issues={issue_data} filterText={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateTemplate;
