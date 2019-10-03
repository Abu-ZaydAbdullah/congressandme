import React from 'react'
import Jumbotron from './components/Jumbotron'
import IssueCard from './components/IssueCard'
export const Issues = () => (

  <main role="main">
    <Jumbotron title_text={"Issues"} subtitle_text={"All the hottest topics being discussed"}/>
    <br></br>
    <div className="panel">
      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
        <IssueCard/>
        </li>
      </ul>
    </div>

  </main>
)
