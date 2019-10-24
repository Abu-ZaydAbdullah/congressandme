import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Representatives from './Representatives';
import RepresentativeTemplate from './templates/RepresentativeTemplate';
import StateTemplate from './templates/StateTemplate';
import IssueTemplate from './templates/IssueTemplate';
import States from './States';
import Issues from './Issues';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import RepresentativePageTemplate from './templates/RepresentativePageTemplate'
import IssuePageTemplate from './templates/IssuePageTemplate'
import StatePageTemplate from './templates/StatePageTemplate';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/representatives" component={Representatives} />
              <Route path="/representative/:full_name" component={RepresentativeTemplate} />
              <Route path="/representatives/page/:page_num" component={RepresentativePageTemplate}/>
              <Route exact path="/states" component={States} />
              <Route path="/state/:name" component={StateTemplate} />
              <Route path="/states/page/:page_num" component={StatePageTemplate} />
              <Route exact path="/issues" component={Issues} />
              <Route path="/issue/:name" component={IssueTemplate} />
              <Route path="/issues/page/:page_num" component={IssuePageTemplate} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;