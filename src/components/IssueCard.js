import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

function trimSummary(str, queries) {
    var query;
    for (query in queries) {
      let idx = str.toLowerCase().indexOf(queries[query].toLowerCase());
      if (idx !== -1) {
        return idx;
      }
    }
    return 0;
  }

function IssueCard({ issues, filterText }) {
    const queries = filterText.split(" ");
    const issueList = issues.map((state, index) => {
        var summary_idx = trimSummary(state.about, queries);
        return(
            <div className="col-md-4" key={issue.index}>
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
                  textToHighlight={issue.description}
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
                    summary_idx,
                    summary_idx + 100
                  )}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </p>
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
        )
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