import React from 'react';
import ShowcaseButton from './ShowcaseButton';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

// const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

const myData = [{
  'y': 569,
  'x': "Agriculture and Food",
  'rotation': -45
}, {
  'y': 2200,
  'x': "Armed Forces and National Security",
  'rotation': -45
}, {
  'y': 339,
  'x': "Crime and Law Enforcement",
  'rotation': -45
}, {
  'y': 426,
  'x': "Economics and Public Finance",
  'rotation': -45
}, {
  'y': 1240,
  'x': "Education",
  'rotation': -45
}, {
  'y': 268,
  'x': "Emergency Management",
  'rotation': -45
}, {
  'y': 736,
  'x': "Environmental Protection",
  'rotation': -45
}, {
  'y': 644,
  'x': "Guns",
  'rotation': -45
}, {
  'y': 2189,
  'x': "Health",
  'rotation': -45
}, {
  'y': 298,
  'x': "Housing and Community Development",
  'rotation': -45
}, {
  'y': 547,
  'x': "Immigration",
  'rotation': -45
}, {
  'y': 642,
  'x': "Labor and Employment",
  'rotation': -45
}, {
  'y': 711,
  'x': "Social labels",
  'rotation': -45
}, {
  'y': 454,
  'x': "Taxation",
  'rotation': -45
}, {
  'y': 959,
  'x': "Transportation and Public Works",
  'rotation': -45
}, {
  'y': 0,
  'x': "Unknown",
  'rotation': -45
}];

export default class BarChart extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    return (
      <div>
        <XYPlot xType="ordinal" width={1000} height={300} xDistance={100} margin={{left: 50, right: 10, top: 10, bottom: 40}}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={myData} />
          {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
        </XYPlot>
      </div>
    );
  }
}