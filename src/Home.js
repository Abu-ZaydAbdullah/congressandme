import React from 'react'
import Jumbotron from './components/Jumbotron'

export const Home = () => (
  <main role="main">
    <div>
      <Jumbotron title_text={"Congress and Me"} subtitle_text={"Welcome to the Home Page!"}/>
    </div>

    <div className="row" style={{marginBottom: '3%'}}>
    <div className="col-md-3"></div>
    <div className="col-md-6">
    <h5 className="text-justify">The six of us believe that a well-informed populace is crucial to a functioning democracy. We wanted a way for people to easily see what issues their representatives are and aren’t talking about in their tweets and on the Congress floor, and we wanted to highlight which issues are being discussed and which ones require attention on a nation-wide scale. To that end, we’ve built Congress and Me.</h5>
    </div>
    <div className="col-md-3"></div>
    </div>
  </main>
)
