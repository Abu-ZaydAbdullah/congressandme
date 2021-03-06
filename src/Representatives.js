import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import RepresentativeCard from "./components/RepresentativeCard";
import repImage from "./assets/repImage.jpg";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import states_list from "./data/StatesAbbreviations";
import { reps_alphabetical, reps_reversed } from "./utils/SortFunctions";
import { sanitize } from "./utils/TextFunctions";
const Fuse = require("fuse.js");

function Representatives() {
  const [representatives, setRepresentatives] = useState([]);
  const { page_num } = useParams();
  const num_of_reps = 540;
  const default_num_pages = 10;
  const reps_per_page = num_of_reps / default_num_pages;
  const [filterText, setFilterText] = useState("");
  const [dataSize, setDataSize] = useState(num_of_reps);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);
  const [filterState, setFilterState] = useState("");

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
    value = sanitize(value);
    setFilterText(value);
  }

  useEffect(() => {
    if (filterText === "") {
      const start_index = (page_num - 1) * reps_per_page;
      setRepresentatives(data.slice(start_index, start_index + reps_per_page));
      setDataSize(data.length);
    } else {
      var temp_data = fuse.search(filterText);
      setRepresentatives(temp_data);
      setDataSize(temp_data.length);
    }
  }, [filterText]);

  const fetchRepresentatives = async () => {
    if (data.length === 0) {
      let res = await axios(
        `https://api.congressand.me/api/Representatives?results_per_page=${num_of_reps}`
      );
      let data = await res.data.objects;
      const start_index = (page_num - 1) * reps_per_page;
      await setData(data);
      await setRepresentatives(
        data.slice(start_index, start_index + reps_per_page)
      );
      await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1) * reps_per_page;
      resetRepresentatives(
        data.slice(start_index, start_index + reps_per_page)
      );
    }
  };

  useEffect(() => {
    fetchRepresentatives();
  }, [page_num]);

  function resetRepresentatives() {
    if (sort_dir === "A-Z") {
      const start_index = (page_num - 1) * reps_per_page;
      let temp_data = data
        .sort(reps_alphabetical)
        .filter(representative => repInState(representative));
      setRepresentatives(
        temp_data.slice(start_index, start_index + reps_per_page)
      );
      setDataSize(temp_data.length);
    } else if (sort_dir === "Z-A") {
      const start_index = (page_num - 1) * reps_per_page;
      let temp_data = data
        .sort(reps_reversed)
        .filter(representative => repInState(representative));
      setRepresentatives(
        temp_data.slice(start_index, start_index + reps_per_page)
      );
      setDataSize(temp_data.length);
    }
  }

  function repInState(representative) {
    if (filterState === "") {
      return true;
    }
    return representative.state === filterState;
  }

  useEffect(() => {
    resetRepresentatives();
  }, [sort_dir]);

  useEffect(() => {
    resetRepresentatives();
  }, [filterState]);

  const states_dropdown = states_list.map((state, index) => {
    return (
      <Dropdown.Item
        onClick={() => {
          setFilterState(state);
        }}
        key={index}
      >
        {state}
      </Dropdown.Item>
    );
  });

  return (
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
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter By:
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ overflow: "scroll", maxHeight: "200px" }}>
                <Dropdown.Item
                  onClick={() => {
                    setFilterState("");
                  }}
                >
                  Reset Filter
                </Dropdown.Item>
                {states_dropdown}
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
      <Pagination
        model={"representatives"}
        data_size={dataSize}
        per_page={reps_per_page}
      />
    </main>
  );
}

export default Representatives;
