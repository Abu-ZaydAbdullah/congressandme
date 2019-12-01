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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryPie
        style={{ labels: { fill: "white", fontSize: 20 } }}
        innerRadius={200}
        labelRadius={240}
        labels={({ datum }) => `${datum.x} (${datum.y.toFixed(2) * 100}%)`}
        labelComponent={<CustomLabel />}
        data={this.props.data}
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
