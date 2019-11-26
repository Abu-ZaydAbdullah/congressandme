import React, { useState, useEffect, Fragment, lazy } from "react";
import { Tab, Tabs } from "react-bootstrap";
import congressImage from "./assets/congress_image.jpg";
import { sanitize } from "./utils/TextFunctions";
import StateData from "./data/StateData";
import RepresentativeData from "./data/RepresentativeData";
import IssueData from "./data/IssueData";
const Search = lazy(() => import("./components/Search"));
const Jumbotron = lazy(() => import("./components/Jumbotron"));
const RepresentativeCard = lazy(() =>
  import("./components/RepresentativeCard")
);
const IssueCard = lazy(() => import("./components/IssueCard"));
const StateCard = lazy(() => import("./components/StateCard"));
const Fuse = require("fuse.js");

function Home() {
  const [filterText, setFilterText] = useState("");
  const [state_data, setStateData] = useState([]);
  const [rep_data, setRepData] = useState([]);
  const [issue_data, setIssueData] = useState([]);

  var state_options = {
    shouldSort: false,
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

  var rep_options = {
    shouldSort: false,
    tokenize: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 140,
    minMatchCharLength: 1,
    keys: [
      { name: "full_name", weight: 0.4 },
      { name: "party", weight: 0.1 },
      { name: "state", weight: 0.1 },
      { name: "chamber", weight: 0.1 },
      { name: "twitter", weight: 0.1 },
      { name: "facebook", weight: 0.1 }
    ]
  };

  var issue_options = {
    shouldSort: false,
    tokenize: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 140,
    minMatchCharLength: 1,
    keys: [
      { name: "name", weight: 0.6 },
      { name: "description", weight: 0.2 },
      { name: "about", weight: 0.2 }
    ]
  };

  const fuseReps = new Fuse(RepresentativeData, rep_options);
  const fuseStates = new Fuse(StateData, state_options);
  const fuseIssues = new Fuse(IssueData, issue_options);

  function filterUpdate(value) {
    value = sanitize(value);
    setFilterText(value);
  }

  useEffect(() => {
    setRepData(fuseReps.search(filterText));
    setStateData(fuseStates.search(filterText));
    setIssueData(fuseIssues.search(filterText));
  }, [filterText]);

  return (
    <Fragment>
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
              The six of us believe that a well-informed populace is crucial to
              a functioning democracy. We wanted a way for people to easily see
              what issues their representatives are and aren’t talking about in
              their tweets and on the Congress floor, and we wanted to highlight
              which issues are being discussed and which ones require attention
              on a nation-wide scale. To that end, we’ve built Congress and Me.
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
        <Tabs defaultActiveKey="reps" id="uncontrolled-tab-example">
          <Tab eventKey="reps" title="Representatives">
            <RepresentativeCard
              representatives={rep_data}
              filterText={filterText}
            />
          </Tab>
          <Tab eventKey="states" title="States">
            <StateCard states={state_data} filterText={filterText} />
          </Tab>
          <Tab eventKey="issues" title="Issues">
            <IssueCard issues={issue_data} filterText={filterText} />
          </Tab>
        </Tabs>
      </main>
      <br></br>
      <br></br>
    </Fragment>
  );
}

export default Home;
