import React from "react";
import { VictoryLabel, VictoryTooltip, VictoryPie } from "victory";

class CustomLabel extends React.Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props}/>
          <VictoryTooltip
            {...this.props}
            x={200} y={300}
            orientation="top"
            pointerLength={0}
            cornerRadius={100}
            flyoutWidth={200}
            flyoutHeight={200}
            flyoutStyle={{ fill: "black" }}
          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
  
  
  class PieChart extends React.Component {
    render() {
      return (
          <VictoryPie
            style={{ labels: { fill: "white", fontSize: "5rem" } }}
            innerRadius={200}
            labelRadius={240}
            labels={({ datum }) => `${datum.x}`}
            labelComponent={<CustomLabel />}
            data={[
                {
                    "count": 569,
                    "x": "Agriculture and Food",
                    "y": 0.04655539191621666
                }, {
                    "count": 2200,
                    "x": "Armed Forces and Security",
                    "y": 0.18000327278677794
                }, {
                    "count": 339,
                    "x": "Crime and Law Enforcement",
                    "y": 0.02773686794305351
                }, {
                    "count": 426,
                    "x": "Economics and Public Finance",
                    "y": 0.03485517918507609
                }, {
                    "count": 1240,
                    "x": "Education",
                    "y": 0.10145639011618393
                }, {
                    "count": 268,
                    "x": "Emergency Management",
                    "y": 0.021927671412207493
                }, {
                    "count": 736,
                    "x": "Environmental Protection",
                    "y": 0.060219276714122076
                }, {
                    "count": 644,
                    "x": "Guns",
                    "y": 0.052691867124856816
                }, {
                    "count": 2189,
                    "x": "Health",
                    "y": 0.17910325642284405
                }, {
                    "count": 298,
                    "x": "Housing",
                    "y": 0.024382261495663558
                }, {
                    "count": 547,
                    "x": "Immigration",
                    "y": 0.04475535918834888
                }, {
                    "count": 642,
                    "x": "Labor and Employment",
                    "y": 0.052528227785959745
                }, {
                    "count": 711,
                    "x": "Social Issues",
                    "y": 0.05817378497790869
                }, {
                    "count": 454,
                    "x": "Taxation",
                    "y": 0.037146129929635084
                }, {
                    "count": 959,
                    "x": "Transportation and Public Works",
                    "y": 0.07846506300114547
                }, {
                    "count": 0,
                    "x": "Unknown",
                    "y": 0.0
                }
            ]}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          />
      );
    }
  }
  
export default PieChart;