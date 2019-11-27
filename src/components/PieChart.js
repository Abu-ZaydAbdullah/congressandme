import React from "react";
import { VictoryLabel, VictoryTooltip, VictoryPie } from "victory";

class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryLabel {...this.props} />
        <VictoryTooltip
          {...this.props}
          x={200}
          y={300}
          orientation="top"
          pointerLength={0}
          cornerRadius={100}
          flyoutWidth={200}
          flyoutHeight={200}
          flyoutStyle={{ fill: "#222f3e" }}
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
        style={{ labels: { fill: "white", fontSize: 20 } }}
        innerRadius={200}
        labelRadius={240}
        labels={({ datum }) => `${datum.x} (${(datum.y.toFixed(2))*100}%)`}
        labelComponent={<CustomLabel />}
        data={[
          {
            count: 569,
            x: "Agriculture \nand Food",
            y: 0.04655539191621666
          },
          {
            count: 2200,
            x: "Armed Forces \nand\n Security",
            y: 0.18000327278677794
          },
          {
            count: 339,
            x: "Crime and \nLaw Enforcement",
            y: 0.02773686794305351
          },
          {
            count: 426,
            x: "Economics \nand \nPublic Finance",
            y: 0.03485517918507609
          },
          {
            count: 1240,
            x: "Education",
            y: 0.10145639011618393
          },
          {
            count: 268,
            x: "Emergency\n Management",
            y: 0.021927671412207493
          },
          {
            count: 736,
            x: "Environmental\n Protection",
            y: 0.060219276714122076
          },
          {
            count: 644,
            x: "Guns",
            y: 0.052691867124856816
          },
          {
            count: 2189,
            x: "Health",
            y: 0.17910325642284405
          },
          {
            count: 298,
            x: "Housing",
            y: 0.024382261495663558
          },
          {
            count: 547,
            x: "Immigration",
            y: 0.04475535918834888
          },
          {
            count: 642,
            x: "Labor \nand\n Employment",
            y: 0.052528227785959745
          },
          {
            count: 711,
            x: "Social Issues",
            y: 0.05817378497790869
          },
          {
            count: 454,
            x: "Taxation",
            y: 0.037146129929635084
          },
          {
            count: 959,
            x: "Transportation \nand Public Works",
            y: 0.07846506300114547
          },
          {
            count: 0,
            x: "Unknown",
            y: 0.0
          }
        ]}
        colorScale={[
          "#ff9ff3",
          "#feca57",
          "#ff6b6b",
          "#48dbfb",
          "#1dd1a1",
          "#f368e0",
          "#ff9f43",
          "#ee5253",
          "#0abde3",
          "#10ac84",
          "#00d2d3",
          "#5f27cd",
          "#c8d6e5",
          "#576574",
          "#222f3e",
          "#2e86de"
        ]}
      />
    );
  }
}

export default PieChart;
