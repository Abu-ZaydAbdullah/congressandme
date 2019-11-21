import React, { lazy } from "react";
const AboutCard = lazy(() => import('./components/AboutCard'));
const ToolCard = lazy(() => import('./components/ToolCard'));
const SourceCard = lazy(() => import('./components/SourceCard'));

function About() {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Meet the Team</h1>
          <p className="lead text-muted">
            Get to know the team responsible for creating and maintaining this
            site!
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Our Purpose
        </h3>
        <div className="row" style={{ marginBottom: "3%" }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h5 className="text-justify">
              Our website shows the topics that members of Congress discuss and
              avoid based on their Tweets as well as speeches given before
              Congress. It helps users by allowing them to see which issues are
              represented in their home state and which ones should be lobbied
              for in regards to being addressed. This website will also
              highlight which issues on a nation-wide scale are being discussed
              and which ones require attention.
            </h5>
          </div>
          <div className="col-md-3"></div>
        </div>

        <AboutCard />
        <h3
          className="text-center"
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          Tools
        </h3>
        <ToolCard />
        <h3
          className="text-center"
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          Data Sources
        </h3>
        <SourceCard />

        <h3 className="text-center" style={{ marginBottom: "3%" }}>
          Links
        </h3>
        <p className="text-center">
          <a href="https://gitlab.com/AbuZaydAbdullah/congressconversation">
            GitLab Repository
          </a>
        </p>
        <p className="text-center">
          <a href="https://documenter.getpostman.com/view/9014793/SVzxXyvM?version=latest">
            API Documentation
          </a>
        </p>
      </div>
    </main>
  );
}

export default About;
