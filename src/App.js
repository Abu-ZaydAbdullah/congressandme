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
        <Router forceRefresh='true'>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/representatives" component={Representatives} />
              <Route path="/representative/:full_name/:page_num/:index" render={(props)=>{ return <RepresentativeTemplate page_num={props.match.params.page_num} index={props.match.params.index}/> }}/>/>
              <Route path="/representatives/page/:page_num" render={(props)=>{ return <RepresentativePageTemplate page_num={props.match.params.page_num}/> }}/>
              <Route exact path="/states" component={States} />
              <Route path="/state/:name/:page_num/:index" render={(props)=>{ return <StateTemplate page_num={props.match.params.page_num} index={props.match.params.index}/> }}/> />
              <Route path="/states/page/:page_num" render={(props)=>{ return <StatePageTemplate page_num={props.match.params.page_num}/> }}/>
              <Route exact path="/issues" component={Issues} />
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

// <Route path="/representatives/page/:page_num/:index" render={(props)=>{ return <RepresentativePageTemplate index={props.match.params.index} page_num={props.match.params.page_num}/> }}/>


export default App;