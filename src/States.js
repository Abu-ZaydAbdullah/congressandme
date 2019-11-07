import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import stateImage from "./assets/stateImage.jpg";
import StateCard from "./components/StateCard";
import { Dropdown } from "react-bootstrap"
import Search from "./components/Search";
const Fuse = require("fuse.js")

function States() {
  const [states, setStates] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(50);
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
      { name: "abbreviation", weight: 0.5 },
      { name: "name", weight: 0.4 },
      { name: "summary", weight: 0.1 }
    ]
  };
  const fuse = new Fuse(data, options);

  function filterUpdate(value) {
    setFilterText(value);
  }

  useEffect(() => {
    var temp_data = fuse.search(filterText)
    setStates(temp_data);
    setDataSize(temp_data.length)
  }, [filterText]);

  const fetchStates = async () => {
    if(data.length == 0) {
    let res = await axios(
      `https://api.congressand.me/api/States?results_per_page=50`
    );
    let data = await res.data.objects;
    const start_index = (page_num - 1)*9
    await setData(data);
    await setStates(data.slice(start_index, start_index + 9));
    await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1)*9
      setData(data);
      setStates(data.slice(start_index, start_index + 9));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
    fetchStates();
  }, [page_num]);

  const sortStates = () => {
    if(sort_dir == "A-Z")
    {
      const start_index = (page_num - 1)*9
      setStates(data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 9))
    } else if (sort_dir == "Z-A") {
      const start_index = (page_num - 1)*9
      setStates(data.sort(function(a, b){
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 9))
    }
  };

  useEffect(() => {
    sortStates();
  }, [sort_dir]);

  const pagination_list = () => {
    let p_list = [];
    for(var i = 0; i < dataSize/9; i++)
    {
      p_list.push(
      <li class="page-item">
        <Link
          to={{
            pathname: `/states/page/${i + 1}`,
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

  return (
    <>
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
          <div className="col-md-10"></div>
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
          <br></br>
          </div>
          </div>
        </div>
        <Search
        placeholder={"Search"}
        filterText={filterText}
        filterUpdate={filterUpdate.bind(this)}
      />
        <StateCard states={states} filterText={filterText}/>

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

export default States;
