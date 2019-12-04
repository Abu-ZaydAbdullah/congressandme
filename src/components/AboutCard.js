import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import React, { useState, useEffect } from "react";
import data from "../data/GroupMembers";

function AboutCard() {
  const [commit_dict, setCommitDict] = useState({
    "Abu-Zayd Abdullah": 0,
    "Abu-ZaydAbdullah": 0,
    "Robert Gutierrez": 0,
    "Calvin Dao": 0,
    "David Sikabwe": 0,
    "Benjamin Burton": 0,
    "Ben Hazel": 0
  });
  const [commit_count, setCommitCount] = useState(0);
  const [issue_dict, setIssueDict] = useState({
    "Abu-Zayd Abdullah": 0,
    "Abu-ZaydAbdullah": 0,
    "Robert Gutierrez": 0,
    "Calvin Dao": 0,
    "David Sikabwe": 0,
    "Benjamin Burton": 0,
    BenHazel007: 0
  });
  const [issue_count, setIssueCount] = useState(0);
  const [unittest_dict] = useState({
    "Abu-Zayd Abdullah": 40,
    "Abu-ZaydAbdullah": 0,
    "Robert Gutierrez": 0,
    "Calvin Dao": 0,
    "David Sikabwe": 0,
    "Benjamin Burton": 41,
    "Ben Hazel": 0
  });
  const [unittest_count] = useState(81);

  function getCommits() {
    let currPage = 1;
    while (currPage < 5) {
      var authOptions = {
        method: "GET",
        url: `https://gitlab.com/api/v4/projects/14525540/repository/commits?all=true&per_page=100&page=${currPage}`,
        headers: { "Private-Token": "mS_bG_uQE4UkARaq3_oQ" },
        json: true
      };
      axios(authOptions).then(response => {
        let temp_commit_count = 0;
        const responseData = response.data;
        responseData.forEach(commit => {
          temp_commit_count += 1;
          commit_dict[commit.author_name] += 1;
        });
        commit_dict["Abu-Zayd Abdullah"] = 0;
        commit_dict["Abu-Zayd Abdullah"] += commit_dict["Abu-ZaydAbdullah"];

        setCommitCount(previousCount => previousCount + temp_commit_count);
      });
      currPage += 1;
    }
  }

  function getIssues() {
    var authOptions = {
      method: "GET",
      url:
        "https://gitlab.com/api/v4/projects/14525540/issues?scope=all&state=all&per_page=100",
      headers: { "Private-Token": "mS_bG_uQE4UkARaq3_oQ" },
      json: true
    };
    axios(authOptions).then(response => {
      const responseData = response.data;
      let temp_issue_count = 0;
      let temp_issue_dict = cloneDeep(issue_dict);
      responseData.forEach(issue => {
        temp_issue_count += 1;
        if (issue.closed_by != null) {
          temp_issue_dict[issue.closed_by.name] += 1;
        }
      });
      setIssueDict(temp_issue_dict);
      setIssueCount(temp_issue_count);
    });
  }

  useEffect(() => {
    getCommits();
    getIssues();
  }, []);

  const aboutList = data.map(member => {
    return (
      <div className="col-md-4" key={member.index}>
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top about-image"
            style={{ maxHeight: 262 }}
            src={member.image}
            alt="{member.name}"
          ></img>
          <div className="card-body">
            <h5>{member.name}</h5>
            <div>
              <p className="card-text">
                <strong>Role: </strong>
                {member.role}
              </p>
              <p className="card-text">
                <strong>Biography: </strong>
                {member.bio}
              </p>
            </div>
            {"\n"}
            <p className="card-text">
              <strong>Commits: </strong>
              {commit_dict[member.name]}
            </p>
            <p className="card-text">
              <strong>Issues: </strong>
              {issue_dict[member.name] != undefined
                ? issue_dict[member.name]
                : issue_dict[member.gitlab_id]}
            </p>
            <p className="card-text">
              <strong>Unit Tests: </strong>
              {unittest_dict[member.name]}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {aboutList}
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <div className="card-body">
              <h5>Team Stats</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <strong>Total Commits:</strong> {commit_count}
              </p>
              <p className="card-text">
                <strong>Total Issues:</strong> {issue_count}
              </p>
              <p className="card-text">
                <strong>Total Unit Tests:</strong> {unittest_count}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default AboutCard;
