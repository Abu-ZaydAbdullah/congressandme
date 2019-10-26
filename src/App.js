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
import IssuePageTemplate from './templates/IssuePageTemplate'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/representative/:full_name/:page_num/:index" component={RepresentativeTemplate}/>/>
              <Route path="/representatives/page/:page_num" component={Representatives}/>
              <Route path="/state/:name/:page_num/:index" component={StateTemplate}/> />
              <Route path="/states/page/:page_num" component={States}/>
              <Route exact path="/issues/" component={Issues} />
              <Route path="/issue/:name/:page_num/:index" render={(props)=>{ return <IssueTemplate page_num={props.match.params.page_num} index={props.match.params.index}/> }}/>/>
              <Route path="/issues/page/:page_num" render={(props)=>{ return <IssuePageTemplate page_num={props.match.params.page_num}/> }}/>
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