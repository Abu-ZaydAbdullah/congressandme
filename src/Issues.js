import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import issueImage from "./assets/issueImage.jpg";
import { Dropdown } from "react-bootstrap"

function Issues() {
  const [issues, setIssues] = useState([]);
  const { page_num } = useParams();
  const [dataSize, setDataSize] = useState(5);
  const [sort_dir, setSortDir] = useState("A-Z");
  const [data, setData] = useState([]);

  const fetchIssues = async () => {
    if(data.length == 0) {
      let res = await axios(
      `https://api.congressand.me/api/Issues?results_per_page=15`
    );
    let data = await res.data.objects;
    const start_index = (page_num - 1)*5
    await setData(data);
    await setIssues(data.slice(start_index, start_index + 5));
    await setDataSize(data.length);
    } else {
      const start_index = (page_num - 1)*5
      setData(data);
      setIssues(data.slice(start_index, start_index + 5));
      setDataSize(data.length);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, [page_num]);

  const sortIssues = () => {
    if(sort_dir == "A-Z")
    {
      const start_index = (page_num - 1)*5
      setIssues(data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 5))
    } else if (sort_dir == "Z-A") {
      const start_index = (page_num - 1)*5
      setIssues(data.sort(function(a, b){
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
    }).slice(start_index, start_index + 5))
    }
  };

  useEffect(() => {
    sortIssues();
  }, [sort_dir]);

  const pagination_list = () => {
    let p_list = [];
    for(var i = 0; i < dataSize/5; i++)
    {
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
      )
    }
    return p_list;
  }

  const issueList = issues.map(issue => {
    console.log(issue.abbreviation);
    return (
      <div className="col-md-4" key={issue.index}>
        <div className="card mb-4 box-shadow">
          <Link
            to={{
              pathname: `/issue/${issue.name}`,
              state: {
                name: issue.name,
                abbreviation: issue.abbreviation,
                description: issue.description,
                image: issue.image,
                states: issue.states,
                reps: issue.rep,
                vids: issue.vids
              }
            }}
          >
            <img
              className="card-img-top about-image"
              style={{ maxHeight: 450 }}
              src={issue.image}
              alt="Card image cap"
            ></img>
          </Link>
          <div className="card-body">
            <h5>{issue.name}</h5>
            <p className="card-text">{issue.description}</p>
            <Link
              to={{
                pathname: `/issue/${issue.name}`,
                state: {
                  name: issue.name,
                  abbreviation: issue.abbreviation,
                  description: issue.description,
                  image: issue.image,
                  states: issue.states,
                  reps: issue.rep,
                  vids: issue.vids
                }
              }}
            >
              <a class="btn btn-light">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    );
  });
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
          </div>
          </div>
        <div className="panel">
          <ul className="list-group" id="contact-list">
            <li className="list-group-item">
              <div className="album py-5 bg-light">
                <div className="container">
                  <div className="row">
                    {issueList}

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
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Issues;
