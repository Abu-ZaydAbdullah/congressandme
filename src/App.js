import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
const Home = lazy(() => import('./Home'));
const Representatives = lazy(() => import('./Representatives'));
const States = lazy(() => import('./States'));
const Issues = lazy(() => import('./Issues'));
const About = lazy(() => import('./About'));
const RepresentativeTemplate = lazy(() => import('./templates/RepresentativeTemplate'));
const StateTemplate = lazy(() => import('./templates/StateTemplate'));
const IssueTemplate = lazy(() => import('./templates/IssueTemplate'));
const NoMatch = lazy(() => import('./NoMatch'));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/representative/:full_name"
                component={RepresentativeTemplate}
              />
              />
              <Route
                path="/representatives/page/:page_num"
                component={Representatives}
              />
              <Route path="/state/:name" component={StateTemplate} /> />
              <Route path="/states/page/:page_num" component={States} />
              <Route path="/issue/:name" component={IssueTemplate} /> }}/>/>
              <Route path="/issues/page/:page_num" component={Issues} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
