import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron'
import RepresentativeCard from './components/RepresentativeCard'
import Search from './components/Search'

class Representatives extends Component { 
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
  return (
  <main role="main">
    <div>
    <Jumbotron title_text={"Congress and Me"} subtitle_text={"Learn more about what your representatives are up to!"}/>
    <br></br>
    <h1 className="page-title">Representatives</h1>
    </div>
    <Search filterText = {this.state.filterText} filterUpdate = {this.filterUpdate.bind(this)} placeholder = "Name of Representative"/>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        <RepresentativeCard filterText = {this.state.filterText}/>
        </div>
      </div>
    </div>
  </main>
)
}
}

export default Representatives;
