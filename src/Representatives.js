import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import repImage from "./assets/repImage.jpg";
import { Dropdown } from "react-bootstrap"

function Representatives() {
  const [representatives, setRepresentatives] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(540);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [filterState, setFilterState] = useState("");


  const fetchRepresentatives = async () => {
    if(data.length == 0) {
      let res = await axios(
      `https://api.congressand.me/api/Representatives?results_per_page=540`
    );
    let data = await res.data.objects;
    await setFullData(res.data.objects);
    const start_index = (page_num - 1)*54
    await setData(data);
    await setRepresentatives(data.slice(start_index, start_index + 54));
    await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1)*54
      setData(data);
      setRepresentatives(data.slice(start_index, start_index + 54));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
    fetchRepresentatives();
  }, [page_num]);

  const sortReps = () => {
    if(sort_dir == "A-Z")
    {
      const start_index = (page_num - 1)*54
      setRepresentatives(data.sort(function(a, b){
        if(a.full_name < b.full_name) { return -1; }
        if(a.full_name > b.full_name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 54))
    } else if (sort_dir == "Z-A") {
      const start_index = (page_num - 1)*54
      setRepresentatives(data.sort(function(a, b){
        if(a.full_name > b.full_name) { return -1; }
        if(a.full_name < b.full_name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 54))
    }
  };

  useEffect(() => {
    sortReps();
  }, [sort_dir]);

  const filterByState = () => {
    let filtered_list = [];
    for(var i = 0; i < fullData.length; i++)
    {
      if(fullData[i].state == filterState)
      {
        filtered_list.push(fullData[i]);
      }
        
    }
    
    const start_index = (page_num - 1)*54
    setData(filtered_list);
    setRepresentatives(data.slice(start_index, start_index + 54));
    setDataSize(filtered_list.length);
  }

  useEffect(() => {
    filterByState();
  }, [filterState]);


  const pagination_list = () => {
    let p_list = [];
    for(var i = 0; i < dataSize/54; i++)
    {
      p_list.push(
      <li class="page-item">
        <Link
          to={{
            pathname: `/representatives/page/${i + 1}`,
            state: { page_num: i + 1 }
          }}
        >
          <a class="page-link">{i + 1}</a>
        </Link>
      </li>
      )
    }
    return p_list;
  }

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
          <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-2">
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Filter By:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {setFilterState("AL");}}>AL</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("AK");}}>AK</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("AZ");}}>AZ</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("AR");}}>AR</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("CA");}}>CA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("CO");}}>CO</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("CT");}}>CT</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("DE");}}>DE</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("FL");}}>FL</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("GA");}}>GA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("HA");}}>HA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("ID");}}>ID</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("IL");}}>IL</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("IN");}}>IN</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("IA");}}>IA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("KS");}}>KS</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("KY");}}>KY</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("LA");}}>LA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("ME");}}>ME</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MD");}}>MD</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MA");}}>MA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MI");}}>MI</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MN");}}>MN</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MS");}}>MS</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MO");}}>MO</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("MT");}}>MT</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NE");}}>NE</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NV");}}>NV</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NH");}}>NH</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NJ");}}>NJ</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NM");}}>NM</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NY");}}>NY</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("NC");}}>NC</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("ND");}}>ND</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("OH");}}>OH</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("OK");}}>OK</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("OR");}}>OR</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("PA");}}>PA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("RI");}}>RI</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("SC");}}>SC</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("SD");}}>SD</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("TN");}}>TN</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("TX");}}>TX</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("UT");}}>UT</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("VT");}}>VT</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("VA");}}>VA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("WA");}}>WA</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("WV");}}>WV</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("WI");}}>WI</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFilterState("WY");}}>WY</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
          <div className="col-md-2">
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Sort By:
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {setSortDir("A-Z");}}>A-Z</Dropdown.Item>  
              <Dropdown.Item onClick={() => {setSortDir("Z-A");}}>Z-A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
          </div>
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
                            {pagination_list()}
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
