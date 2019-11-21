import React from "react";
import { state_link } from "../utils/LinkFunctions";
import { trimSummary } from "../utils/TextFunctions"
import Highlighter from "react-highlight-words";

function StateCard({ states, filterText }) {
  const queries = filterText.split(" ");
  const stateList = states.map((state, index) => {
    const state_image = () => {
      return (
        <img
          className="card-img-top about-img"
          style={{ maxHeight: 160 }}
          src={state.image}
          alt="{state.name}"
        ></img>
      );
    };
    const learn_more = () => {
      return <a class="btn btn-light">Learn More</a>;
    };
    var summary_idx = trimSummary(state.summary, queries);
    return (
      <div className="col-md-4" key={state.index}>
        <div className="card mb-4 box-shadow">
          {state_link(state, state_image())}
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
                  textToHighlight={state.summary.substring(
                    summary_idx,
                    state.summary.indexOf(
                      " ",
                      state.summary.indexOf(" ", summary_idx + 99)
                    )
                  )}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </p>
              <p className="card-text">
                <strong>Website: </strong>
                <a href={state.website}>
                  <Highlighter
                    searchWords={queries}
                    autoEscape={false}
                    textToHighlight={state.website.substring(0, 26)}
                    highlightStyle={{
                      backgroundColor: "#27ae60",
                      color: "white"
                    }}
                  />
                </a>
              </p>
              {state_link(state, learn_more())}
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
