import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";
import axios from "axios";

function RepresentativeTemplate() {
  
  const rep_data = { ...useLocation().state };
  const [issueData, setIssueData] = useState([]);

  const getIssueData = async () => {
      const req = await axios(
        `https://api.congressand.me/api/States?q={"filters":[{"name":"full_name","op":"==","val":"${rep_data.name}"}]}`
      );
      const data = await req.data.objects;
      const allIssues = await []
      var issue;
      for (issue in await data) {
      console.log(issue)
      if (data[issue]) {
      allIssues.push(issue)
      }
      }
      await setIssueData(allIssues);
  };

  useEffect(() => {
    getIssueData();
    console.log(issueData)
  }, [rep_data.name]);

  return (
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
                    <Timeline
                      dataSource={{
                        sourceType: "profile",
                        screenName: rep_data.twitter
                      }}
                      options={{
                        username: "TwitterDev",
                        height: "400"
                      }}
                      onLoad={() => console.log("Timeline is loaded!")}
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
  );
}

export default RepresentativeTemplate;
