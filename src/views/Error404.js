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
      <div id="app-content">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="mb-3">Page not found</h1>
              <i class="fas fa-caret-square-left"></i> <Link to="/" className="link-light">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
