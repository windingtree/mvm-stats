import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Components

export default class MainNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'nav'
    };
  }

  componentWillMount() {
    const self = this;
  }

  componentDidMount() {
    const self = this;
  }

  render() {
    const self = this;

    return (
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="guide-to-sell">Guide</Link></li>
        </ul>
      </nav>
    );
  }
}
