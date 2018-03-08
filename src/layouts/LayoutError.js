import React, { Component } from 'react';

// Components
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Alert from '../components/Alert';

export default class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'MainLayout'
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

    let childrenWithProps = React.cloneElement(self.props.children, {
      _showAlert: (type, message) => self._alert.open(type, message)
		});

    return (
      <div id="app-layout" className="app-layout--error">
        <Alert ref={ (c) => self._alert = c } />

        <AppHeader id="app-header" />
        {this.props.children}

      </div>
    );
  }
}
