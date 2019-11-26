import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import issueImage from "./assets/issueImage.jpg";
import IssueCard from "./components/IssueCard";
import { Dropdown } from "react-bootstrap";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import states_list from "./data/StatesAbbreviations";
import { issues_alphabetical, issues_reversed } from "./utils/SortFunctions";
import { sanitize } from "./utils/TextFunctions";
const Fuse = require("fuse.js");

function Issues() {
  const [issues, setIssues] = useState([]);
  const { page_num } = useParams();
  const num_of_issues = 15;
  const default_num_pages = 3;
  const issues_per_page = Math.round(num_of_issues / default_num_pages);
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
  };

  useEffect(() => {
    fetchIssues();
  }, [page_num]);

  const sortIssues = () => {
    if (sort_dir === "A-Z") {
      const start_index = (page_num - 1) * 5;
      setIssues(
        data.sort(issues_alphabetical).slice(start_index, start_index + 5)
      );
    } else if (sort_dir === "Z-A") {
      const start_index = (page_num - 1) * 5;
      setIssues(data.sort(issues_reversed).slice(start_index, start_index + 5));
    }
  };

  useEffect(() => {
    sortIssues();
  }, [sort_dir]);

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

            <Dropdown.Menu style={{ overflow: "scroll", maxHeight: "200px" }}>
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
      <Search
        placeholder={"Search"}
        filterText={filterText}
        filterUpdate={filterUpdate.bind(this)}
      />
      <IssueCard issues={issues} filterText={filterText} />
      <Pagination
        model={"issues"}
        data_size={dataSize}
        per_page={issues_per_page}
      />
    </main>
  );
}

export default Issues;
