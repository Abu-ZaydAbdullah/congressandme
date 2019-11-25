import React, { Component } from 'react';
import * as d3 from 'd3';
import { LabeledArc } from './LabeledArc';
 
class PieChart extends Component {
    constructor() {
        super();
 
        this.pie = d3.layout.pie()
                     .value((d) => d.value);
        this.colors = d3.scale.category10();
    }
 
    arcGenerator(d, i) {
        return (
            <LabeledArc key={`arc-${i}`}
                        data={d}
                        innerRadius={this.props.innerRadius}
                        outerRadius={this.props.outerRadius}
                        color={this.colors(i)} />
        );
    }
 
    render() {
        let pie = this.pie(this.props.data),
        translate = `translate(${this.props.x}, ${this.props.y})`;

        return (
            <svg width="750" height="750">
            <g transform={translate}>
                {pie.map((d, i) => this.arcGenerator(d, i))}
            </g>
            </svg>
        )
    }
}
 
export default PieChart;