import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import stateImage from "./assets/stateImage.jpg";
import StateCard from "./components/StateCard";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
import issue_list from "./data/IssueAbbreviation";
import { states_alphabetical, states_reversed } from "./utils/SortFunctions";
const Fuse = require("fuse.js");

function States() {
  const [states, setStates] = useState([]);
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
      const start_index = (page_num - 1) * 9;
      await setData(data);
      await setData2(data2);
      await setStates(data.slice(start_index, start_index + 9));
      await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1) * 9;
      resetStates(data.slice(start_index, start_index + 9));
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
      const start_index = (page_num - 1) * 9;
      let temp_data = data
        .sort(states_alphabetical)
        .filter(state => stateHasIssue(state));
      setStates(temp_data.slice(start_index, start_index + 9));
      setDataSize(temp_data.length);
    } else if (sort_dir === "Z-A") {
      const start_index = (page_num - 1) * 9;
      let temp_data = data
        .sort(states_reversed)
        .filter(state => stateHasIssue(state));
      setStates(temp_data.slice(start_index, start_index + 9));
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

  const pagination_list = () => {
    let p_list = [];
    console.log("page list " + String(dataSize));
    for (var i = 0; i < dataSize / 9; i++) {
      p_list.push(
        <li className="page-item" key={i}>
          <Link
            to={{
              pathname: `/states/page/${i + 1}`,
              state: { page_num: i + 1 }
            }}
          >
            <p className="page-link">{i + 1}</p>
          </Link>
        </li>
      );
    }
    return p_list;
  };

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

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <nav>
              <ul aria-label="Page:" className="pagination">
                {pagination_list()}
              </ul>
            </nav>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </main>
  );
}

export default States;
