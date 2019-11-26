import React from "react";
import PieChart from "./components/PieChart";
import WordCloud from "./components/WordCloud";
import LineChart from "./components/LineChart";

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

      {/* <LineChart /> */}

      <WordCloud />

      {/* <svg height="620" width="848" xmlns="http://www.w3.org/2000/svg">
        <text
          dy=".35em"
          font-family="Arial, Helvetica"
          font-size="11"
          text-anchor="middle"
          transform="translate(.5 .5)"
          x="81.51471"
        >
          Unknown
        </text>
        <g transform="translate(.5 .5)">
          <path
            d="m0 0h163.02942v78.59596h-163.02942z"
            fill="#bf8b69"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="39.29798"
          >
            Housing
          </text>
        </g>
        <g transform="translate(.5 79.09596)">
          <path
            d="m0 0h163.02942v85.171717h-163.02942z"
            fill="#bfae69"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="42.585859"
          >
            Crime and Law Enforcement
          </text>
        </g>
        <g transform="translate(.5 164.267677)">
          <path
            d="m0 0h163.02942v88.30303h-163.02942z"
            fill="#aebf69"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="44.151515"
          >
            Emergency Management
          </text>
        </g>
        <g transform="translate(.5 252.570707)">
          <path
            d="m0 0h163.02942v104.89899h-163.02942z"
            fill="#8bbf69"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="52.449495"
          >
            Economics and Public Finance
          </text>
        </g>
        <g transform="translate(.5 357.469697)">
          <path
            d="m0 0h163.02942v125.878788h-163.02942z"
            fill="#69bf69"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="62.939394"
          >
            Taxation
          </text>
        </g>
        <g transform="translate(.5 483.348485)">
          <path
            d="m0 0h163.02942v137.151515h-163.02942z"
            fill="#69bf8b"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="81.51471"
            y="68.575758"
          >
            Agriculture and Food
          </text>
        </g>
        <g transform="translate(163.52942 .5)">
          <path
            d="m0 0h206.750947v216.790123h-206.750947z"
            fill="#69bfae"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="103.375473"
            y="108.395062"
          >
            Immigration
          </text>
        </g>
        <g transform="translate(163.52942 217.290123)">
          <path
            d="m0 0h206.750947v114.567901h-206.750947z"
            fill="#69aebf"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="103.375473"
            y="57.283951"
          >
            Social Issues
          </text>
        </g>
        <g transform="translate(163.52942 331.858025)">
          <path
            d="m0 0h206.750947v136.54321h-206.750947z"
            fill="#698bbf"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="103.375473"
            y="68.271605"
          >
            Labor and Employment
          </text>
        </g>
        <g transform="translate(163.52942 468.401235)">
          <path
            d="m0 0h206.750947v152.098765h-206.750947z"
            fill="#6969bf"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="103.375473"
            y="76.049383"
          >
            Environmental Protection
          </text>
        </g>
        <g transform="translate(370.280367 .5)">
          <path
            d="m0 0h195.417817v202.716942h-195.417817z"
            fill="#8b69bf"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="97.708909"
            y="101.358471"
          >
            Transportation and Public Works
          </text>
        </g>
        <g transform="translate(565.698184 .5)">
          <path
            d="m0 0h282.801816v202.716942h-282.801816z"
            fill="#ae69bf"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="141.400908"
            y="101.358471"
          >
            Education
          </text>
        </g>
        <g transform="translate(370.280367 203.216942)">
          <path
            d="m0 0h478.219633v204.745179h-478.219633z"
            fill="#bf69ae"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="239.109816"
            y="102.37259"
          >
            Health
          </text>
        </g>
        <g transform="translate(370.280367 407.962121)">
          <path
            d="m0 0h478.219633v212.537879h-478.219633z"
            fill="#bf698b"
            stroke="#fff"
          />
          <text
            dy=".35em"
            font-family="Arial, Helvetica"
            font-size="11"
            text-anchor="middle"
            x="239.109816"
            y="106.268939"
          >
            Armed Forces and National Security
          </text>
        </g>
      </svg> */}
    </main>
  );
}

export default Visualizations;
