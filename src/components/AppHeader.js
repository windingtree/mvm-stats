import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'header'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const lifLogo = 'img/content/logo-lif-w.svg';

    return (
      <header id={this.props.id}>
        <h1>
          <Link to="/" className="brand-wrapper brand-wrapper--alpha">
            <img className="brand" src={lifLogo}/>
          </Link>
        </h1>
      </header>
    );
  }
}
