import React from 'react'
import Jumbotron from './components/Jumbotron'
import ContactCard from './components/ContactCard'

export const Contact = () => (

  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Contacts</h1>
        <p className="lead text-muted">Please give us full time positions.</p>
      </div>
    </section>

    <div className="panel">
      <ul className="list-group" id="contact-list">
        <li className="list-group-item">
        <ContactCard />
        </li>
      </ul>
    </div>

  </main>

)
