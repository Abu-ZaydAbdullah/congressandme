import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import IssueCard from "../components/IssueCard";
import axios from "axios";

function RepresentativeTemplate() {
  const rep_data = { ...useLocation().state };
  const [issuesMentioned, setIssuesMentioned] = useState([]);
  const [issue_data, setIssueData] = useState([]);

  const getIssueList = async () => {
    const req = await axios(
      `https://api.congressand.me/api/Mentions?q={"filters":[{"name":"full_name","op":"==","val":"${rep_data.name}"}]}`
    );
    const data = await req.data.objects[0];
    const allIssues = await (() => {
      var issue;
      var issueList = [];
      for (issue in data) {
        if (data[issue]) {
          issueList.push(issue);
        }
      }
      return issueList;
    });
    console.log(allIssues());
    await setIssuesMentioned(allIssues());
  };

  const getIssueData = async () => {
    const req = await axios(
      `https://api.congressand.me/api/Issues?results_per_page=31`
    );
    const data = await req.data.objects;
    await setIssueData(data);
  };

  useEffect(() => {
    getIssueList();
    getIssueData();
    window.scrollTo(0, 0);
  }, [rep_data.name]);

  return (
    <>
      <div>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={rep_data.image} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-head">
                <h4>{rep_data.name}</h4>
                <h5>{rep_data.type}</h5>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab">
                      About
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={rep_data.twitter.split("@")[1]}
                        options={{ height: 400 }}
                      />
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
                  <a href={rep_data.website} target="_blank">
                    Website
                  </a>
                  <br />
                  <a href={rep_data.form} target="_blank">
                    Email
                  </a>
                  <br />
                  <a href={rep_data.phone} target="_blank">
                    Phone
                  </a>
                  <p>Social Media</p>
                  <a href={rep_data.twitter} target="_blank">
                    Twitter
                  </a>
                  <br />
                  <a href={rep_data.facebook} target="_blank">
                    Facebook
                  </a>
                  <br />
                  <a href={rep_data.youtube} target="_blank">
                    YouTube
                  </a>
                  <br />
                  <a href={rep_data.rss} target="_blank">
                    RSS
                  </a>
                  <br />
                  <br />
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
                      <label>Party</label>
                    </div>
                    <div className="col-md-6">
                      <p>{rep_data.party}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>State</label>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <Link to={`/state/${rep_data.state}`}>
                          {rep_data.state}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Chamber</label>
                    </div>
                    <div className="col-md-6">
                      <p>{rep_data.chamber}</p>
                    </div>
                    <div className="col-md-6">
                      <label>
                        Summary: (Courtesy of{" "}
                        <a href="http://bioguide.congress.gov" target="_blank">
                          BioGuide
                        </a>
                        )
                      </label>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-12">
                      <p>{rep_data.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <label>
          <strong>Issues Discussed:</strong>
        </label>
      </div>
      <div className="container">
        <div className="row">
          <IssueCard issues={issue_data} filterText={""} />
        </div>
      </div>
    </>
  );
}

export default RepresentativeTemplate;
