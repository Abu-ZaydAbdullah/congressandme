import React, { Component } from 'react'
import Jumbotron from './components/Jumbotron'
import IssueCard from './components/IssueCard'
import Search from './components/Search'
import issueImage from './assets/issueImage.jpg'

class Issues extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      open: false
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  render() {
  return(
  
  <main role="main">
    <Jumbotron title_text={"Issues"} subtitle_text={"All the hottest topics being discussed"} image={issueImage}/>
    <br></br>
    <h1 className="page-title">Issues</h1>
    <div className="panel">
    <Search filterText = {this.state.filterText} filterUpdate = {this.filterUpdate.bind(this)} />
      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
        <IssueCard filterText = {this.state.filterText}/>
        </li>
      </ul>
    </div>

  </main>
  )
  }
}

export default Issues;
