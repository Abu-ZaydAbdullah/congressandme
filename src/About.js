import React from 'react'
import AboutCard from './components/AboutCard'
import ToolCard from './components/ToolCard'

export const About = () => (

  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Meet the Team</h1>
        <p className="lead text-muted">Get to know the team responsible for creating and maintaining this site!</p>
      </div>
    </section>

    <div className="album py-5 bg-light">
        <AboutCard/>
    <h3 className="text-center" style={{marginTop: '3%', marginBottom: '3%'}}>Tools</h3>
        <ToolCard/>
    </div>
  </main>

)
