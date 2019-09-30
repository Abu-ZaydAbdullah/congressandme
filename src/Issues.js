import React from 'react'
import Jumbotron from './components/Jumbotron'
import IssueCard from './components/IssueCard'
export const Issues = () => (

  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Issues</h1>
        <p className="lead text-muted">"All the hottest topics being discussed"</p>
      </div>
    </section>

    <div className="panel">
      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
        <IssueCard/>
        </li>
      </ul>
    </div>

  </main>
)
