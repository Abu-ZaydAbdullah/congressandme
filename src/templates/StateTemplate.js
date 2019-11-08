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
    if (temp_data.state == undefined) {
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
    const data2 = await data[0];
    console.log(data2);
    const allIssues = await (() => {
      var issue;
      var issueList = [];
      for (issue in data2) {
        if (data2[issue]) {
          issueList.push(issue);
        }
      }
      return issueList;
    });
    console.log(allIssues());
    await setIssuesMentioned(allIssues());
    const req2 = await axios(
      `https://api.congressand.me/api/Issues?results_per_page=31`
    );
    const data3 = await req2.data.objects;
    await setIssueData(data3);
    console.log(data3);
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
        <div className="container">
          <div className="row">
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <RepresentativeCard
                    representatives={rep_data}
                    filterText={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <h1>Issues relevant to this state:</h1>
        <div className="container">
          <div className="row">
            <IssueCard issues={issue_data} filterText={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateTemplate;
