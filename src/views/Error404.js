import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'error 404'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render () {
    return (
      <div id="app-content" role="main">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="mb-3"><b>Page not found</b></h1>
              <i className="wicon-back text--sm text-accent"></i>  <Link to="/" hrefLang="en" className="link-muted">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
