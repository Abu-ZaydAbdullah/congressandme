import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/RepresentativeMembers";

class RepresentativeCard extends Component {
  render() {
    const repList = Object.keys(data).map(key => {
    let representative = data[key];
      return (
        <div className="col-md-4" key={representative.index}>
          <div className="card mb-4 box-shadow">
            <img
              className="card-img-top about-image"
              style={{ maxHeight: 450 }}
              src={`https://github.com/Abu-ZaydAbdullah/images/raw/gh-pages/congress/450x550/${representative.bioguide_id}.jpg`}
              alt="{representative.full_name}"
            ></img>
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
                {representative.type === "sen"
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
    return repList;
  }
}

export default RepresentativeCard;

