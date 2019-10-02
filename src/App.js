import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Representatives } from './Representatives';
import RepresentativeTemplate from './templates/RepresentativeTemplate';
import { States } from './States';
import { Issues } from './Issues';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { EnvironmentInst} from './components/EnvironmentInst';

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
              <Route path="/representatives/" component={RepresentativeTemplate} />
              <Route path="/states" component={States} />
              <Route path="/issues" component={Issues} />
              <Route path="/about" component={About} />
              <Route path="/environmentInst" component={EnvironmentInst} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
