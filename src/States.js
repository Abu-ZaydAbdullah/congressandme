import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import stateImage from "./assets/stateImage.jpg";
import StateCard from "./components/StateCard";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import issue_list from "./data/IssueAbbreviation";
import { states_alphabetical, states_reversed } from "./utils/SortFunctions";
import { sanitize } from "./utils/TextFunctions"
const Fuse = require("fuse.js");

function States() {
  const [states, setStates] = useState([]);
  const num_of_states = 50;
  const default_num_pages = 6;
  const states_per_page = Math.ceil(num_of_states / default_num_pages);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(50);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterIssue, setFilterIssue] = useState("");
  var options = {
    shouldSort: true,
    tokenize: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 140,
    minMatchCharLength: 1,
    keys: [
      { name: "abbreviation", weight: 0.5 },
      { name: "name", weight: 0.4 },
      { name: "summary", weight: 0.1 }
    ]
  };
  const fuse = new Fuse(data, options);

  function filterUpdate(value) {
    value = sanitize(value);
    setFilterText(value);
  }

  useEffect(() => {
    if (filterText === "") {
      setStates(data);
      setDataSize(data.length);
    } else {
      var temp_data = fuse.search(filterText);
      setStates(temp_data);
      setDataSize(temp_data.length);
    }
  }, [filterText]);

  const fetchStates = async () => {
    if (data.length === 0) {
      let res = await axios(
        `https://api.congressand.me/api/States?results_per_page=50`
      );
      let data = await res.data.objects;

      let res2 = await axios(
        `https://api.congressand.me/api/stateIssues?results_per_page=56`
      );
      let data2 = await res2.data.objects;
      const start_index = (page_num - 1) * states_per_page;
      await setData(data);
      await setData2(data2);
      await setStates(data.slice(start_index, start_index + states_per_page));
      await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1) * states_per_page;
      resetStates(data.slice(start_index, start_index + states_per_page));
    }
  };

  useEffect(() => {
    resetStates();
  }, [filterIssue]);

  useEffect(() => {
    fetchStates();
  }, [page_num]);

  useEffect(() => {
    resetStates();
  }, [sort_dir]);

  function resetStates() {
    if (sort_dir === "A-Z") {
      const start_index = (page_num - 1) * states_per_page;
      let temp_data = data
        .sort(states_alphabetical)
        .filter(state => stateHasIssue(state));
      setStates(temp_data.slice(start_index, start_index + states_per_page));
      setDataSize(temp_data.length);
    } else if (sort_dir === "Z-A") {
      const start_index = (page_num - 1) * states_per_page;
      let temp_data = data
        .sort(states_reversed)
        .filter(state => stateHasIssue(state));
      setStates(temp_data.slice(start_index, start_index + states_per_page));
      setDataSize(temp_data.length);
    }
  }

  function stateHasIssue(state) {
    if (filterIssue === "") {
      return true;
    }
    for (var i = 0; i < data2.length; i++) {
      if (data2[i].state === state.abbreviation) {
        return data2[i].tally.includes(filterIssue);
      }
    }
    return false;
  }

  const issue_dropdown = Object.keys(issue_list).map((issue, index) => {
    return (
      <Dropdown.Item
        onClick={() => {
          setFilterIssue(issue);
        }}
      key={index}>
        {issue_list[issue]}
      </Dropdown.Item>
    );
  });

  return (
    <main role="main">
      <div>
        <Jumbotron
          title_text={"States"}
          subtitle_text={"Learn more about your State!"}
          image={stateImage}
        />
        <br></br>
        <h1 className="page-title">States</h1>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-2">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter By:
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setFilterIssue("");
                  }}
                >
                  Reset Filter
                </Dropdown.Item>
                {issue_dropdown}
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
      <StateCard states={states} filterText={filterText} />

      <Pagination model={'states'} data_size={dataSize} per_page={states_per_page} />
    </main>
  );
}

export default States;
