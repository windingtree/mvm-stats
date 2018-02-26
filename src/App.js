import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout.js';

// Views
import Home from './views/Home';
import GuideToSell from './views/GuideToSell';
import Error404 from './views/Error404';

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/guide-to-sell' component={GuideToSell} />
            <Route path='/404' component={Error404} />
            <Redirect from='*' to='/404' />
          </Switch>
        </MainLayout>
      </Router>
    )
  }
}
