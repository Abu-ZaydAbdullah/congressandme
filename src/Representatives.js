import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import repImage from "./assets/repImage.jpg";

function Representatives() {
  const [representatives, setRepresentatives] = useState([]);
  const { page_num } = useParams();

  const fetchRepresentatives = async () => {
    let res = await axios(
      `https://api.congressand.me/api/Representatives?page=${page_num}`
    );
    let data = await res.data.objects;
    await setRepresentatives(data);
  };

  useEffect(() => {
    fetchRepresentatives();
  }, [page_num]);

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

  return (
    <>
      <main role="main">
        <div>
          <Jumbotron
            title_text={"Representatives"}
            subtitle_text={"Learn who represents your State!"}
            image={repImage}
          />
          <br></br>
          <h1 className="page-title">Representatives</h1>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row"></div>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  {repList}

                  <div className="container">
                    <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <nav>
                          <ul aria-label="Page:" class="pagination">
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/1`,
                                  state: { page_num: 1 }
                                }}
                              >
                                <a class="page-link">1</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/2`,
                                  state: { page_num: 2 }
                                }}
                              >
                                <a class="page-link">2</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/3`,
                                  state: { page_num: 3 }
                                }}
                              >
                                <a class="page-link">3</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/4`,
                                  state: { page_num: 4 }
                                }}
                              >
                                <a class="page-link">4</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/5`,
                                  state: { page_num: 5 }
                                }}
                              >
                                <a class="page-link">5</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/6`,
                                  state: { page_num: 6 }
                                }}
                              >
                                <a class="page-link">6</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/7`,
                                  state: { page_num: 7 }
                                }}
                              >
                                <a class="page-link">7</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/8`,
                                  state: { page_num: 8 }
                                }}
                              >
                                <a class="page-link">8</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/9`,
                                  state: { page_num: 9 }
                                }}
                              >
                                <a class="page-link">9</a>
                              </Link>
                            </li>
                            <li class="page-item">
                              <Link
                                to={{
                                  pathname: `/representatives/page/10`,
                                  state: { page_num: 10 }
                                }}
                              >
                                <a class="page-link">10</a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Representatives;
