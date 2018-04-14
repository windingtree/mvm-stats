import React, {Component} from 'react';

class Alert extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      type: '',
      message: '',
      hide: false
    };
  }

  open = (type, message) => {
    if (this.state.open !== false) return;
    if (type === 'none') return this.close;

    setTimeout(()=>{
      this.setState({
        open: true,
        type: type,
        message: message
      });
      setTimeout(this.fadeOut,
      (message.length < 50 ? 3500 : (message.length * 62) ));
    }, 10);
  }

  fadeOut = () => {
    this.setState({hide: true});
    setTimeout(this.close, 1000);
  }

  close = () => {
    this.setState({open: false, hide: false});
  }

  render() {
    let alertType = (this.state.type==='error') ? 'danger' : this.state.type;
    let alertMessage = this.state.message;
    let hide = this.state.hide;

    if (this.state.open) {

      return (
        <div className="alert-wrapper">
          <div className={`alert alert-${alertType} alert-dismissible animated ${hide ? 'tdFadeOut' : 'tdFadeInLeft'}`}>
            <button type="button" className="close" data-dismiss="alert" onClick={this.fadeOut}>×</button>
            <strong>
              <i className="wicon-info"></i>
            </strong> {alertMessage}
          </div>
        </div>
      );

    } else {
      return null;
    }
  }

}

export default Alert;
