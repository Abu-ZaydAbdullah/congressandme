import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

function RepresentativeCard({ representatives, filterText }) {
  const queries = filterText.split(" ");
  const repList = representatives.map(representative => {
    return (
      <div className="col-md-4" key={representative.index}>
        <div className="card mb-4 box-shadow">
          <Link
            to={{
              pathname: `/representative/${representative.full_name}`,
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
              <Link
                to={{
                  pathname: `/representative/${representative.full_name}`,
                  state: {
                    name: representative.full_name,
                    chamber:
                      representative.type === "sen"
                        ? "Senate"
                        : "House of Representatives",
                    type:
                      representative.type === "sen"
                        ? "Senator"
                        : "Representative",
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
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">{repList}</div>
      </div>
    </div>
  );
}

export default RepresentativeCard;
