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
  }

  componentDidMount() {
  }

  render() {
    const lifLogo = 'img/content/logo-lif-w.svg';

    return (
      <header id={this.props.id}>
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
