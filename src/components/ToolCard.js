import React, { Component } from "react";
import data from "../data/ToolData"

class ToolCard extends Component {
  render() {
  const toolList = data.map(tool => {
  return (
  <div className="col-md-4" key={tool.index}>
  <div className="card mb-4 box-shadow text-center">
    <img className="card-img-top about-image mx-auto" style={{maxHeight: 240, padding: 40}} src={tool.image} alt="{tool.name}"></img>
    <div className="card-body">
      <h5>{tool.name}</h5>
      <p>
      <p className="card-text">{tool.purpose}</p>
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
    )
  return (
  <div className="container">
  <div className="row">
  {toolList}
  </div>    
  </div>
  )
}
}

export default ToolCard;





