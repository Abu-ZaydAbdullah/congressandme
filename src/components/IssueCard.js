import React from "react";
import { issue_link } from "../utils/LinkFunctions";
import Highlighter from "react-highlight-words";

function trimSummary(str, queries) {
  var query;
  for (query in queries) {
    let idx = str.toLowerCase().indexOf(queries[query].toLowerCase());
    if (idx !== -1) {
      return str.indexOf(" ", idx - 5) + 1;
    }
  }
  return 0;
}

function IssueCard({ issues, filterText }) {
  const queries = filterText.split(" ");

  const issueList = issues.map(issue => {
    var about_idx = trimSummary(issue.about, queries);
    var description_idx = trimSummary(issue.description, queries);
    const issue_image = () => {
      return (
        <img
          className="card-img-top about-image"
          style={{ maxHeight: 200 }}
          src={issue.image}
          alt={issue.name}
        ></img>
      );
    };
    const learn_more = () => {
      return <p className="btn btn-light" style={{color: "#007bff"}}>Learn More</p>;
    };
    return (
      <div className="col-md-4 text-center" key={issue.name}>
        <div className="card mb-4 box-shadow">
          {issue_link(issue, issue_image())}
          <div className="card-body">
            <h5>
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={issue.name}
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </h5>
            <p className="card-text">
              <strong>Description: </strong>
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={issue.description.substring(
                  description_idx,
                  issue.description.indexOf(
                    "",
                    issue.description.indexOf(" ", description_idx + 90)
                  )
                )}
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            <p className="card-text">
              <strong>About: </strong>
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={issue.about.substring(
                  about_idx,
                  issue.about.indexOf(
                    " ",
                    issue.about.indexOf(" ", about_idx + 90)
                  )
                )}
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            {issue_link(issue, learn_more())}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">{issueList}</div>
      </div>
    </div>
  );
}

export default IssueCard;
