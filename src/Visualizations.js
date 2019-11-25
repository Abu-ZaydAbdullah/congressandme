import React from "react";
import PieChart from "./components/PieChart"
import * as d3 from "d3";

function Visualizations () {
  
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

            <div className="col-md-6">
            <PieChart x={100} y={100} outerRadius={100} innerRadius={50}
            data={[{value: 92-34, label: 'Code lines'},
                 {value: 34, label: 'Empty lines'}]} />
            </div>
      </div>
    </main>
  );
}

export default Visualizations;
