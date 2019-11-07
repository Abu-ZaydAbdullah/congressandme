import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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

  // TODO. Filter based on mentions like in reptemplate
  const issueList = issue_data.map(issue => {
    console.log(issue_data);
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <Link
            to={{
              pathname: `/issue/${issue.name}`,
              state: {
                name: issue.name,
                abbreviation: issue.abbreviation,
                about: issue.about,
                description: issue.description,
                image: issue.image,
                states: issue.states,
                reps: issue.rep,
                vids: issue.vids
              }
            }}
          >
            <img
              className="card-img-top about-image"
              style={{ maxHeight: 450 }}
              src={issue.image}
              alt="Card image cap"
            ></img>
          </Link>
          <div className="card-body">
            <h5>{issue.name}</h5>
            <p className="card-text">{issue.description}</p>
            <Link
              to={{
                pathname: `/issue/${issue.name}`,
                state: {
                  name: issue.name,
                  abbreviation: issue.abbreviation,
                  about: issue.about,
                  description: issue.description,
                  image: issue.image,
                  states: issue.states,
                  reps: issue.rep,
                  vids: issue.vids
                }
              }}
            >
              <a class="btn btn-light">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  const repList = rep_data.map((representative, index) => {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <Link
            to={{
              pathname: `/representative/${index}`,
              state: {
                name: representative.full_name,
                chamber:
                  representative.type === "sen"
                    ? "Senate"
                    : "House of Representatives",
                image: `https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`,
                party: representative.party,
                state: representative.state,
                twitter: `https://twitter.com/@${representative.twitter}`,
                facebook: `https://facebook.com/${representative.facebook}`,
                youtube: `https://www.youtube.com/results?search_query=${representative.youtube}`,
                rss: representative.rss_url,
                website: representative.url,
                form: representative.contact_form,
                phone: `tel:${representative.phone}`,
                summary: representative.bioguide_summary
              }
            }}
          >
            <img
              className="card-img-top about-image"
              style={{ maxHeight: 450 }}
              src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
              alt={representative.full_name}
            ></img>
          </Link>

          <div className="card-body">
            <h5>{representative.full_name}</h5>
            <p className="card-text">
              <strong>Party:</strong> {representative.party}
            </p>
            <p className="card-text">
              <strong>State:</strong> {representative.state}
            </p>
            <p className="card-text">
              <strong>Chamber:</strong>{" "}
              {representative.chamber === "sen"
                ? "Senate"
                : "House of Representatives"}
            </p>
            <p className="card-text">
              <strong>
                <a href={`https://twitter.com/@${representative.twitter}`}>
                  Twitter:
                </a>
              </strong>{" "}
              {representative.twitter !== ""
                ? `@${representative.twitter}`
                : "n/a"}
            </p>
            <p className="card-text">
              <strong>
                <a href={`https://facebook.com/${representative.facebook}`}>
                  Facebook:
                </a>
              </strong>{" "}
              {representative.facebook !== ""
                ? `${representative.facebook}`
                : "n/a"}
            </p>
            <div class="col-mb-4 text-center">
              <Link
                to={{
                  pathname: `/representative/${index}`,
                  state: {
                    name: representative.full_name,
                    chamber:
                      representative.type === "sen"
                        ? "Senate"
                        : "House of Representatives",
                    image: `https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`,
                    party: representative.party,
                    state: representative.state,
                    twitter: `https://twitter.com/@${representative.twitter}`,
                    facebook: `https://facebook.com/${representative.facebook}`,
                    youtube: `https://www.youtube.com/results?search_query=${representative.youtube}`,
                    rss: representative.rss_url,
                    website: representative.url,
                    form: representative.contact_form,
                    phone: `tel:${representative.phone}`,
                    summary: representative.bioguide_summary
                  }
                }}
              >
                <a class="btn btn-light">Learn More</a>
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });

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
                <div className="row">{repList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <h1>Issues relevant to this state:</h1>
        <div className="container">
          <div className="row">
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">{issueList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateTemplate;
