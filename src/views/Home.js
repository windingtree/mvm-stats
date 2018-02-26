import React, {Component} from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'home'
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
        <h1>Home</h1>
        <p><a className="btn btn-info" href="http://getbootstrap.com/" target="_blank">Bootstrap</a> framework included.</p>
      </div>
    )
  }
}
