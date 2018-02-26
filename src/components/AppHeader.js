import React, { Component } from 'react';

// Components
import MainNav from './MainNav';

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

    return (
      <header id={self.props.id}>
        <h1 className="mt-0">Header</h1>
        <MainNav/>
      </header>
    );
  }
}
