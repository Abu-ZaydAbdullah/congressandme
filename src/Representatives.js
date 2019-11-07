import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import RepresentativeCard from "./components/RepresentativeCard";
import repImage from "./assets/repImage.jpg";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
const Fuse = require("fuse.js");

function Representatives() {
  const [representatives, setRepresentatives] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(540);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);
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
      { name: "full_name", weight: 0.6 },
      { name: "state", weight: 0.1 },
      { name: "party", weight: 0.1 },
      { name: "twitter", weight: 0.1 },
      { name: "facebook", weight: 0.1 }
    ]
  };
  const fuse = new Fuse(data, options);

  function filterUpdate(value) {
    setFilterText(value);
  }

  useEffect(() => {
    var temp_data = fuse.search(filterText);
    setRepresentatives(temp_data);
    setDataSize(temp_data.length);
  }, [filterText]);

  const fetchRepresentatives = async () => {
    if (data.length == 0) {
      let res = await axios(
        `https://api.congressand.me/api/Representatives?results_per_page=540`
      );
      let data = await res.data.objects;
      const start_index = (page_num - 1) * 54;
      await setData(data);
      await setRepresentatives(data.slice(start_index, start_index + 54));
      await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1) * 54;
      setData(data);
      setRepresentatives(data.slice(start_index, start_index + 54));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
    fetchRepresentatives();
  }, [page_num]);

  const sortReps = () => {
    if (sort_dir == "A-Z") {
      const start_index = (page_num - 1) * 54;
      setRepresentatives(
        data
          .sort(function(a, b) {
            if (a.full_name < b.full_name) {
              return -1;
            }
            if (a.full_name > b.full_name) {
              return 1;
            }
            return 0;
          })
          .slice(start_index, start_index + 54)
      );
    } else if (sort_dir == "Z-A") {
      const start_index = (page_num - 1) * 54;
      setRepresentatives(
        data
          .sort(function(a, b) {
            if (a.full_name > b.full_name) {
              return -1;
            }
            if (a.full_name < b.full_name) {
              return 1;
            }
            return 0;
          })
          .slice(start_index, start_index + 54)
      );
    }
  };

  useEffect(() => {
    sortReps();
  }, [sort_dir]);

  const pagination_list = () => {
    let p_list = [];
    for (var i = 0; i < dataSize / 54; i++) {
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
      );
    }
    return p_list;
  };

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
            </div>
            <div className="col-md-2">
              <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
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
            </div>
          </div>
        </div>
        <Search
          placeholder={"Search"}
          filterText={filterText}
          filterUpdate={filterUpdate.bind(this)}
        />
        <RepresentativeCard
          representatives={representatives}
          filterText={filterText}
        />
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

export default Representatives;
