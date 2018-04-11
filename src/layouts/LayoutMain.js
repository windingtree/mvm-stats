import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <div id="app-layout" className="app-layout--main">
        <Alert ref={this._callAlert} />

        <AppHeader id="app-header" />
        {childrenWithProps}

        <ScrollAnimation animateIn="tdFadeInUp" animateOut="tdFadeOutDown" offset="40">
          <AppFooter/>
        </ScrollAnimation>
      </div>
    );
  }
}
