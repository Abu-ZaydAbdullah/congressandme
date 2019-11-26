import React from "react";
import PieChart from "./components/PieChart";
import WordCloud from "./components/WordCloud";
import USMap from "./components/USMap";

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
              data={[
                {
                  value: 569,
                  label: "Agriculture and Food"
                },
                {
                  value: 2200,
                  label: "Armed Forces and National Security"
                },
                {
                  value: 339,
                  label: "Crime and Law Enforcement"
                },
                {
                  value: 426,
                  label: "Economics and Public Finance"
                },
                {
                  value: 1240,
                  label: "Education"
                },
                {
                  value: 268,
                  label: "Emergency Management"
                },
                {
                  value: 736,
                  label: "Environmental Protection"
                },
                {
                  value: 644,
                  label: "Guns"
                },
                {
                  value: 2189,
                  label: "Health"
                },
                {
                  value: 298,
                  label: "Housing and Community Development"
                },
                {
                  value: 547,
                  label: "Immigration"
                },
                {
                  value: 642,
                  label: "Labor and Employment"
                },
                {
                  value: 711,
                  label: "Social labels"
                },
                {
                  value: 454,
                  label: "Taxation"
                },
                {
                  value: 959,
                  label: "Transportation and Public Works"
                },
                {
                  value: 0,
                  label: "Unknown"
                }
              ]}
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
          <USMap />
        </p>
      </div>
    </main>
  );
}

export default Visualizations;
