import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import stateImage from "./assets/stateImage.jpg";
import StateCard from "./components/StateCard";

function States() {
  const [states, setStates] = useState([]);
  const { page_num } = useParams();

  const fetchStates = async () => {
    let res = await axios(
      `https://api.congressand.me/api/States?page=${page_num}`
    );
    let data = await res.data.objects;
    await setStates(data);
  };

  useEffect(() => {
    fetchStates();
  }, [page_num]);

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
        </div>
        <StateCard states={states} filterText={""}/>

        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <nav>
                <ul aria-label="Page:" class="pagination">
                  <li class="page-item">
                    <Link
                      to={{
                        pathname: `/states/page/1`,
                        state: { page_num: 1 }
                      }}
                    >
                      <a class="page-link">1</a>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to={{
                        pathname: `/states/page/2`,
                        state: { page_num: 2 }
                      }}
                    >
                      <a class="page-link">2</a>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to={{
                        pathname: `/states/page/3`,
                        state: { page_num: 3 }
                      }}
                    >
                      <a class="page-link">3</a>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to={{
                        pathname: `/states/page/4`,
                        state: { page_num: 4 }
                      }}
                    >
                      <a class="page-link">4</a>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to={{
                        pathname: `/states/page/5`,
                        state: { page_num: 5 }
                      }}
                    >
                      <a class="page-link">5</a>
                    </Link>
                  </li>
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
