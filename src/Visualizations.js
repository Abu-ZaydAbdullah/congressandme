import React from "react";
import IssueCoverageData from "./data/IssueCoverageData";
import PieChart from "./components/PieChart";
import WordCloud from "./components/WordCloud";
import Choropleth from "./components/Choropleth";

function Visualizations() {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Visualizations</h1>
          <p className="lead text-muted">
            A picture is worth a thousand lines of code.
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Visualization 1
        </h3>
        <p className="lead text-muted text-center">
          Most discussed issues based on tweets. (Hover over a slice.)
        </p>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <PieChart
              x={300}
              y={200}
              outerRadius={500}
              innerRadius={250}
              data={IssueCoverageData}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="album py-5 bg-light">
        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Visualization 2
        </h3>
        <p className="lead text-muted text-center">
          Representatives' most commonly tweeted words. (Hover over a word.)
        </p>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1">
            <WordCloud />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="album py-5 bg-light">
        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Visualization 3
        </h3>
        <p className="lead text-muted text-center">
          Number of Congressman per state. (Hover over a state.)
        </p>
        <div className="row" style={{ paddingLeft: "10%" }}>
          <Choropleth size={[(window.screen.width / 5) * 4, 500]} />
        </div>
      </div>
    </main>
  );
}

export default Visualizations;
