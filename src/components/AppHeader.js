import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Components
// import MainNav from './MainNav';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'header'
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
    const lifLogo = 'img/content/logo-lif-w.svg';

    return (
      <header id={self.props.id}>
        <h1>
          <Link to="/" className="brand-wrapper">
            <img className="brand" src={lifLogo}/>
          </Link>
        </h1>

        {/* <MainNav/> */}
      </header>
    );
  }
}
