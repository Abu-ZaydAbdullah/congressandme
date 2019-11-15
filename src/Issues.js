import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import issueImage from "./assets/issueImage.jpg";
import IssueCard from "./components/IssueCard";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
const Fuse = require("fuse.js");

function Issues() {
  const [issues, setIssues] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(5);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);
  const [filterState, setFilterState] = useState("");
  const [filterText, setFilterText] = useState("");

  var options = {
    shouldSort: true,
    tokenize: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 140,
    minMatchCharLength: 1,
    keys: [
      { name: "name", weight: 0.5 },
      { name: "about", weight: 0.4 },
      { name: "desc", weight: 0.1 }
    ]
  };
  const fuse = new Fuse(data, options);

  function sanitize(value) {
    return value
      .replace("(", " ")
      .replace(")", " ")
      .replace(",", " ")
      .replace("^", " ")
      .replace("[", " ")
      .replace("]", " ")
      .replace("\\", " ");
  }

  function filterUpdate(value) {
    value = sanitize(value);
    setFilterText(value);
  }

  const fetchIssues = async () => {
    if (data.length === 0) {
      let res = await axios(
        `https://api.congressand.me/api/Issues?results_per_page=15`
      );
      let data = await res.data.objects;
      const start_index = (page_num - 1) * 5;
      await setData(data);
      await setIssues(data.slice(start_index, start_index + 5));
      await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1) * 5;
      setData(data);
      setIssues(data.slice(start_index, start_index + 5));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
      var temp_data = fuse.search(filterText);
      setIssues(temp_data);
      setDataSize(temp_data.length);
  }, [filterText]);

  useEffect(() => {
    filterIssuesByState();
  }, [filterState]);

  const filterIssuesByState = async () => {
    console.log(
      `https://api.congressand.me/api/stateIssues?q={"filters":[{"name":"state","op":"==","val":"${filterState}"}]}`
    );
    let res = await axios(
      `https://api.congressand.me/api/stateIssues?q={"filters":[{"name":"state","op":"==","val":"${filterState}"}]}`
    );
    await setIssues(
      data.filter(issue =>
        res.data.objects[0]["tally"].split(",").includes(issue.abbreviation)
      )
    );
    await setDataSize(issues.length);
    console.log("HERE");
  };

  useEffect(() => {
    fetchIssues();
  }, [page_num]);

  const sortIssues = () => {
    if (sort_dir === "A-Z") {
      const start_index = (page_num - 1) * 5;
      setIssues(
        data
          .sort(function(a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .slice(start_index, start_index + 5)
      );
    } else if (sort_dir === "Z-A") {
      const start_index = (page_num - 1) * 5;
      setIssues(
        data
          .sort(function(a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          })
          .slice(start_index, start_index + 5)
      );
    }
  };

  useEffect(() => {
    sortIssues();
  }, [sort_dir]);

  const pagination_list = () => {
    let p_list = [];
    for (var i = 0; i < dataSize / 5; i++) {
      p_list.push(
        <li class="page-item">
          <Link
            to={{
              pathname: `/issues/page/${i + 1}`,
              state: { page_num: i + 1 }
            }}
          >
            <a class="page-link">{i + 1}</a>
          </Link>
        </li>
      );
    }
    return p_list;
  };

  console.log(issues)
  return (
    <>
      <main role="main">
        <Jumbotron
          title_text={"Issues"}
          subtitle_text={"All the hottest topics being discussed"}
          image={issueImage}
        />
        <br></br>
        <h1 className="page-title">Issues</h1>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-2">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter By:
              </Dropdown.Toggle>

              <Dropdown.Menu style={{overflow: "scroll", maxHeight: "200px"}}>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("AL");
                  }}
                >
                  AL
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("AK");
                  }}
                >
                  AK
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("AZ");
                  }}
                >
                  AZ
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("AR");
                  }}
                >
                  AR
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("CA");
                  }}
                >
                  CA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("CO");
                  }}
                >
                  CO
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("CT");
                  }}
                >
                  CT
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("DE");
                  }}
                >
                  DE
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("FL");
                  }}
                >
                  FL
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("GA");
                  }}
                >
                  GA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("HA");
                  }}
                >
                  HA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("ID");
                  }}
                >
                  ID
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("IL");
                  }}
                >
                  IL
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("IN");
                  }}
                >
                  IN
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("IA");
                  }}
                >
                  IA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("KS");
                  }}
                >
                  KS
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("KY");
                  }}
                >
                  KY
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("LA");
                  }}
                >
                  LA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("ME");
                  }}
                >
                  ME
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MD");
                  }}
                >
                  MD
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MA");
                  }}
                >
                  MA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MI");
                  }}
                >
                  MI
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MN");
                  }}
                >
                  MN
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MS");
                  }}
                >
                  MS
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MO");
                  }}
                >
                  MO
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("MT");
                  }}
                >
                  MT
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NE");
                  }}
                >
                  NE
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NV");
                  }}
                >
                  NV
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NH");
                  }}
                >
                  NH
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NJ");
                  }}
                >
                  NJ
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NM");
                  }}
                >
                  NM
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NY");
                  }}
                >
                  NY
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("NC");
                  }}
                >
                  NC
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("ND");
                  }}
                >
                  ND
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("OH");
                  }}
                >
                  OH
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("OK");
                  }}
                >
                  OK
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("OR");
                  }}
                >
                  OR
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("PA");
                  }}
                >
                  PA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("RI");
                  }}
                >
                  RI
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("SC");
                  }}
                >
                  SC
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("SD");
                  }}
                >
                  SD
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("TN");
                  }}
                >
                  TN
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("TX");
                  }}
                >
                  TX
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("UT");
                  }}
                >
                  UT
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("VT");
                  }}
                >
                  VT
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("VA");
                  }}
                >
                  VA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("WA");
                  }}
                >
                  WA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("WV");
                  }}
                >
                  WV
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("WI");
                  }}
                >
                  WI
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("WY");
                  }}
                >
                  WY
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-2">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Sort By:
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setSortDir("A-Z");
                  }}
                >
                  A-Z
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSortDir("Z-A");
                  }}
                >
                  Z-A
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br></br>
          </div>
        </div>
        <Search
          placeholder={"Search"}
          filterText={filterText}
          filterUpdate={filterUpdate.bind(this)}
        />
        <IssueCard issues={issues} filterText={filterText} />

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
      </main>
    </>
  );
}

export default Issues;
