import React, { Component } from 'react';

// Components
import AppHeader from '../components/AppHeader';
import Alert from '../components/Alert';

export default class LayoutError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'LayoutError'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  _callAlert = (c) => this._alert = c;
  _showAlert = (type, message) => this._alert.open(type, message);

  render() {
    let childrenWithProps = React.cloneElement(this.props.children, {
      showAlert: this._showAlert
		});

    return (
      <div id="app-layout" className="app-layout--error">
        <Alert ref={this._callAlert} />

        <AppHeader id="app-header" />
        {childrenWithProps}

      </div>
    );
  }
}
