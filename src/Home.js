import React from 'react'
import Jumbotron from './components/Jumbotron'
import RepresentativeCard from './components/RepresentativeCard'

export const Home = () => (
  <main role="main">
    <div>
    <Jumbotron title_text={"Home"} subtitle_text={"More Stuff Here"}/>
    <h1>Home</h1>
    <p>More Stuff Here</p>
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
