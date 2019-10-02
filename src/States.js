import React from 'react'
import Jumbotron from './components/Jumbotron'
import StateCard from './components/StateCard'

export const States = () => (
  <main role="main">
    <div>
    <Jumbotron title_text={"States"} subtitle_text={"Learn who represents your State!"}/>
    <br></br>
    <h1>States</h1>
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
