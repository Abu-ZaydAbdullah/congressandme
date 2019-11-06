import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

function trimSummary (str, queries) {
var query
for (query in queries) {
let idx = str.indexOf(queries[query])
if (idx !== -1) {
return idx
}
}
}

function StateCard({ states, filterText }) {
  const queries = filterText.split(" ");
  const stateList = states.map((state, index) => {
    let summary_idx = trimSummary(state.summary, queries)
    console.log(state.name+": "+summary_idx)
    return (
      <div className="col-md-4" key={state.index}>
        <div className="card mb-4 box-shadow">
          <Link
            to={{
              pathname: `/state/${state.abbreviation}`,
              state: {
                name: state.name,
                image: state.image,
                website: state.website,
                summary: state.summary,
                issues: state.issues,
                facebook: state.facebook
              }
            }}
          >
            <img
              className="card-img-top about-img"
              style={{ maxHeight: 160 }}
              src={state.image}
              alt="{state.name}"
            ></img>
          </Link>
          <div class="col-mb-4 text-center" style={{ marginTop: "5%" }}>
            <div className="card-body">
              <h5>
              <Highlighter
                  searchWords={queries}
                  autoEscape={false}
                  textToHighlight={state.name}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </h5>
              <p className="card-text">
                <strong>Abbreviation: </strong>
                <Highlighter
                  searchWords={queries}
                  autoEscape={false}
                  textToHighlight={state.abbreviation}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </p>
              <p className="card-text">
                <strong>Summary: </strong>
                <Highlighter
                  searchWords={queries}
                  autoEscape={false}
                  textToHighlight={state.summary.substring(summary_idx, summary_idx + 100)}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group"></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">{stateList}</div>
      </div>
    </div>
  );
}

export default StateCard;
