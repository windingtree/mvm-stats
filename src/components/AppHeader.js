import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'header'
    };
  }

  render() {
    const lifLogo = 'img/content/logo-lif-w.svg';

    return (
      <header id={this.props.id}>
        <h1>
          <Link to="/" hrefLang="en" className="brand-wrapper">
            <img className="brand" src={lifLogo} alt="WindingTree Lif"/>
          </Link>
        </h1>
      </header>
    );
  }
}
