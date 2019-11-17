import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { representative_link } from "../utils/LinkFunctions";

function RepresentativeCard({ representatives, filterText }) {
  const queries = filterText.split(" ");
  const repList = representatives.map(representative => {
    const rep_image = () => {
      return (
        <img
          className="card-img-top about-image"
          style={{ maxHeight: 450 }}
          src={`https://congress-and-me.s3.us-east-2.amazonaws.com/static/media/450x550/${representative.bioguide_id}.jpg`}
          alt={representative.full_name}
        ></img>
      );
    };
    const learn_more = () => {
      return <a class="btn btn-light">Learn More</a>;
    };

    return (
      <div className="col-md-4" key={representative.index}>
        <div className="card mb-4 box-shadow">
          {representative_link(representative, rep_image())}
          <div className="card-body">
            <h5>
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={representative.full_name}
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </h5>
            <p className="card-text">
              <strong>Party:</strong>{" "}
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={representative.party}
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            <p className="card-text">
              <Link to={`/state/${representative.state}`}>
                <strong>State:</strong>{" "}
                <Highlighter
                  searchWords={queries}
                  autoEscape={false}
                  textToHighlight={representative.state}
                  highlightStyle={{
                    backgroundColor: "#27ae60",
                    color: "white"
                  }}
                />
              </Link>
            </p>
            <p className="card-text">
              <strong>Chamber:</strong>{" "}
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={
                  representative.type === "sen"
                    ? "Senate"
                    : "House of Representatives"
                }
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            <p className="card-text">
              <strong>
                <a href={`https://twitter.com/@${representative.twitter}`}>
                  Twitter:
                </a>
              </strong>{" "}
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={
                  representative.twitter !== ""
                    ? `@${representative.twitter}`
                    : "n/a"
                }
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            <p className="card-text">
              <strong>
                <a href={`https://facebook.com/${representative.facebook}`}>
                  Facebook:
                </a>
              </strong>{" "}
              <Highlighter
                searchWords={queries}
                autoEscape={false}
                textToHighlight={
                  representative.facebook !== ""
                    ? `${representative.facebook}`
                    : "n/a"
                }
                highlightStyle={{
                  backgroundColor: "#27ae60",
                  color: "white"
                }}
              />
            </p>
            <div class="col-mb-4 text-center">
              {representative_link(representative, learn_more())}
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
    <div className="container">
      <div className="row">
        <div className="album py-5 bg-light">
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
      </div>
    </div>
  );
}

export default RepresentativeCard;
