import React, { Component } from 'react';
import * as d3 from "d3";
import states from '../data/MapData';
import axios from 'axios';
import './Choropleth.css';
 
class Choropleth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: null
    };
    this.drawChart = this.drawChart.bind(this);
  }

  drawChart() {
    function tooltipHtml(n, d){
      var htmlTable =  "<h4>"+n+"</h4><table>";
      for(var index in d.schools){
        htmlTable += "<tr><td><td>" +(d.schools[index]) + "</td></td></tr>"
      }
      htmlTable +="<tr><td><b>Total</b></td><td><b>"+(d.total)+"</b></td></tr></table>";
      return htmlTable;
    }

    var populated_data = this.state.items;
    var sampleData = {};

    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
    "MI", "WY", "MT", "ID", "WA", "TX", "CA", "AZ", "NV", "UT",
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
    "WI", "MO", "AR", "OK", "KS", "LA", "VA", "DC", "PR", "VI", "AS", "GU", "MP"].forEach(function(d){
        var count = populated_data[d].length;

        sampleData[d]={total: count, schools: populated_data[d],
            color:d3.interpolate("#fbefff", "#bf00ff")(count/10)};
      });

    states.draw("#statesvg", sampleData, tooltipHtml);

    d3.select(window.frameElement).style("height", "600px");
  }

  getData(){
    let statecounts = {"HI": [], "AK": [], "FL": [], "SC": [], "GA": [], "AL": [], "NC": [], "TN": [], "RI": [], "CT": [], "MA": [],
      "ME": [], "NH": [], "VT": [], "NY": [], "NJ": [], "PA": [], "DE": [], "MD": [], "WV": [], "KY": [], "OH": [],
      "MI": [], "WY": [], "MT": [], "ID": [], "WA": [], "TX": [], "CA": [], "AZ": [], "NV": [], "UT": [],
      "CO": [], "NM": [], "OR": [], "ND": [], "SD": [], "NE": [], "IA": [], "MS": [], "IN": [], "IL": [], "MN": [],
      "WI": [], "MO": [], "AR": [], "OK": [], "KS": [], "LA": [], "VA": [], "DC": [], "PR": [], "VI": [], "AS": [], "GU": [], "MP": []};
    axios.get('https://api.congressand.me/api/Representatives?results_per_page=540').then(response => {
      response.data.objects.forEach(rep => {
      const full_name = rep.full_name;
      const state = rep.state;
      console.log(rep);
      statecounts[state].push(full_name);
    });
    this.setState({isLoaded: true, items: statecounts});
    });
    return statecounts;
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if(this.state.isLoaded){
      this.drawChart();
    }
    return (
      <div className="container mb-5">
        <div className="row">
          <div width="100" height="100" id="tooltip"></div>
          <svg id="statesvg" width="960" height="600" style={{marginTop: '5%'}}></svg>
        </div>
      </div>
    );
  }
}

export default Choropleth;
