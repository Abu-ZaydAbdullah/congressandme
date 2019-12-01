import React from "react";
import IncomeData from "./data/TheLastWordIncomeData";
import PieChart from "./components/PieChart";

function Miscellaneous() {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Visualizations for <strong>The Last Word</strong>.</h1>
          <p className="lead text-muted">
            Our website would not be what it is without the input from the development team for <a href="http://thelastword.tech">The Last Word</a>
. Their site catalogs endangered and vulnerable languages around the world.
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Visualization 1
        </h3>
        <p className="lead text-muted text-center">
          Relative importance of each issue. (Hover over a slice.)
        </p>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <PieChart
              x={300}
              y={200}
              outerRadius={500}
              innerRadius={250}
              data={IncomeData}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      
    </main>
  );
}

export default Miscellaneous;
