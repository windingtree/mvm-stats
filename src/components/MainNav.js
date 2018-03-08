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
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="FAQ">FAQ</Link></li>
        </ul>
      </nav>
    );
  }
}
