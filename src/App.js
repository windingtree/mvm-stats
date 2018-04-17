import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, browserHistory} from 'react-router-dom';

// Styles
import './css/app.css';

// Layouts
import LayoutMain from './layouts/LayoutMain.js';
import LayoutError from './layouts/LayoutError.js';

// Views
import Home from './views/Home';
import FAQ from './views/FAQ';
import Error404 from './views/Error404';

export default class App extends Component {
  render () {
    function RouteWithLayout({layout, component}){
      return (
        <Route render={(props) =>
          React.createElement(layout, props, React.createElement(component, props))
        }/>
      );
    }
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Switch>
          <RouteWithLayout layout={LayoutMain} exact path="/" component={Home} />
          <RouteWithLayout layout={LayoutMain} path='/FAQ' component={FAQ} />
          <RouteWithLayout layout={LayoutError} path='/404' component={Error404} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    )
  }
}
