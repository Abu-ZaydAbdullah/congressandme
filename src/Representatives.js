import React from 'react'
import Jumbotron from './components/Jumbotron'
import RepresentativeCard from './components/RepresentativeCard'

export const Representatives = () => (
  <main role="main">
    <div>
    <Jumbotron title_text={"Congress and Me"} subtitle_text={"Learn more about what your representatives are up to!"}/>
    <br></br>
    <h1>Representatives</h1>
    </div>

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        <RepresentativeCard/>
        </div>
      </div>
    </div>
  </main>
)
