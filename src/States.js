import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron'
import StateCard from './components/StateCard'
import stateImage from './assets/stateImage.jpg'
import Search from './components/Search'

class States extends Component { 
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

render(){
return(
<main role="main">
    <div>
    <Jumbotron title_text={"States"} subtitle_text={"Learn who represents your State!"} image={stateImage}/>
    <br></br>
    <h1 className="page-title">States</h1>
    </div>

    {/*<Search filterText = {this.state.filterText} filterUpdate = {this.filterUpdate.bind(this)} placeholder = "Name of State"/>*/}
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        <StateCard filterText = {this.state.filterText}/>
        </div>
      </div>
    </div>
  </main>
)
}
}

export default States;

