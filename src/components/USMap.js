// Adapted from code by Will Haley. https://willhaley.com/blog/united-states-map-react/

import React from "react";
import statesData from "../data/MapData"
import d3 from "d3";

var myTool = d3.select("body")
                  .append("div")
                  .attr("class", "mytooltip")
                  .style("opacity", "0")
                  .style("display", "none");

function USMap() {
    return (
        <svg viewBox="0 0 960 600">
            {statesData.map((stateData, index) =>
                <path
                    className="someCSSClass"
                    style={{cursor: "pointer", fill: "orange"}}
                    key={index}
                    stroke="#fff"
                    strokeWidth="6px"
                    d={stateData.shape}
                    onMouseOver={(event) => {
                        event.target.style.fill = 'red'
                    }}
                    onMouseOut={(event) => {
                        event.target.style.fill = 'orange'
                    }}
                >
                </path>
            )}
        </svg>
    );
}

export default USMap;