import React, {Component} from 'react';

export default class GuideToSell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'guide to sell'
    };
  }

  componentWillMount() {
    const self = this;
  }

  componentDidMount() {
    const self = this;
  }

  render () {
    const self = this;

    return (
      <div id="app-content">
        <h1>Guide to sell</h1>
      </div>
    )
  }
}
