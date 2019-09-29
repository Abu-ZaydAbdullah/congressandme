import React from 'react'
import Jumbotron from './components/Jumbotron'
import RepresentativeCard from './components/RepresentativeCard'

export const Home = () => (
  <main role="main">
    <div>
    <Jumbotron title_text={"Home"} subtitle_text={"More Stuff Here"}/>
    <div class="md-form mt-0">
      <input class="form-control" type="text" placeholder="Search Representatives" aria-label="Search"></input>
    </div>
    <br></br>
    <h1>Quick Find</h1>
    </div>

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        <RepresentativeCard />
        </div>
      </div>
    </div>
  </main>
)
