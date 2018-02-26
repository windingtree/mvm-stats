import React, {Component} from 'react';

export default class NotFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'error 404'
    };
  }

  componentWillMount() {
    const self = this;
  }

  componentDidMount() {
    const self = this;
  }

  render () {
    return (
      <div id="app-content">
        <h1>Not Found</h1>
      </div>
    )
  }
}
