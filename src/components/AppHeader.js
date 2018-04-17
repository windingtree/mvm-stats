import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

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
        <ScrollAnimation animateIn="tdFadeInDown" offset={0} duration={2.5}>
          <h1 className="mb-0">
            <Link to="/" hrefLang="en" className="brand-wrapper brand-wrapper--alpha">
              <img className="brand" src={lifLogo} alt="WindingTree Lif"/>
            </Link>
          </h1>
        </ScrollAnimation>
      </header>
    );
  }
}
