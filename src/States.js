import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import stateImage from "./assets/stateImage.jpg";
import StateCard from "./components/StateCard";
import { Dropdown } from "react-bootstrap"

function States() {
  const [states, setStates] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(50);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);

  const fetchStates = async () => {
    if(data.length == 0) {
    let res = await axios(
      `https://api.congressand.me/api/States?results_per_page=50`
    );
    let data = await res.data.objects;
    const start_index = (page_num - 1)*10
    await setData(data);
    await setStates(data.slice(start_index, start_index + 10));
    await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1)*10
      setData(data);
      setStates(data.slice(start_index, start_index + 10));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
    fetchStates();
  }, [page_num]);

  const sortStates = () => {
    if(sort_dir == "A-Z")
    {
      const start_index = (page_num - 1)*10
      setStates(data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 10))
    } else if (sort_dir == "Z-A") {
      const start_index = (page_num - 1)*10
      setStates(data.sort(function(a, b){
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 10))
    }
  };

  useEffect(() => {
    sortStates();
  }, [sort_dir]);

  const pagination_list = () => {
    let p_list = [];
    for(var i = 0; i < dataSize/10; i++)
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
            <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <StateCard states={states} filterText={""}/>

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
