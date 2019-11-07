import React, { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import congressImage from "./assets/congress_image.jpg";
import StateData from "./data/StateData";
import Search from "./components/Search";
import StateCard from "./components/StateCard";
const Fuse = require("fuse.js");

function Home() {
  const [filterText, setFilterText] = useState("");
  const [state_data, setStateData] = useState([]);
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
  const fuse = new Fuse(StateData, options);

  function filterUpdate(value) {
    setFilterText(value);
  }

  useEffect(() => {
    setStateData(fuse.search(filterText));
  }, [filterText]);

  return (
    <main role="main">
      <div>
        <Jumbotron
          title_text={"Congress and Me"}
          subtitle_text={
            '"The ballot is stronger than the bullet." - Abraham Lincoln'
          }
          image={congressImage}
        />
      </div>
      <h3
        className="text-center"
        style={{ marginBottom: "3%", marginTop: "10%" }}
      >
        What is Congress and Me?
      </h3>
      <div className="row" style={{ marginBottom: "3%" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h5 className="text-justify">
            The six of us believe that a well-informed populace is crucial to a
            functioning democracy. We wanted a way for people to easily see what
            issues their representatives are and aren’t talking about in their
            tweets and on the Congress floor, and we wanted to highlight which
            issues are being discussed and which ones require attention on a
            nation-wide scale. To that end, we’ve built Congress and Me.
          </h5>
        </div>
        <div className="col-md-3"></div>
      </div>
      <br></br>
      <br></br>
      <Search
        placeholder={"Search"}
        filterText={filterText}
        filterUpdate={filterUpdate.bind(this)}
      />
      <StateCard states={state_data} filterText={filterText} />
    </main>
  );
}

export default Home;
