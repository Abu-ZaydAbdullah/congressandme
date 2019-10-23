import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron'
import StateCard from './components/StateCard'

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
    <Jumbotron title_text={"States"} subtitle_text={"Learn who represents your State!"}/>
    <br></br>
    <h1 className="page-title">States</h1>
    </div>

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        <StateCard/>
        </div>
      </div>
    </div>
  </main>
)
}
}

export default States;

