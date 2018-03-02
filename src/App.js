import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout.js';

// Views
import Home from './views/Home';
import FAQ from './views/FAQ';
import Error404 from './views/Error404';

export default class App extends Component {
  render () {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <MainLayout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/FAQ' component={FAQ} />
            <Route path='/404' component={Error404} />
            <Redirect from='*' to='/404' />
          </Switch>
        </MainLayout>
      </Router>
    )
  }
}
