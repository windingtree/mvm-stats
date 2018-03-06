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
    let self = this;
    if (self.state.open !== false) return;
    if (type === 'none') return self.close();

    setTimeout(()=>{
      self.setState({
        open: true,
        type: type,
        message: message
      });
      setTimeout(()=> self.fadeOut(),
      (message.length < 50 ? 3500 : (message.length * 62) ));
    }, 10);
  }

  fadeOut() {
    let self = this;

    self.setState({hide: true});
    setTimeout(() => {
       self.close();
    }, 1000);
  }

  close() {
    let self = this;
    self.setState({open: false, hide: false});
  }

  render() {
    let self = this;
    let alertType = (self.state.type==='error') ? 'danger' : self.state.type;
    let alertMessage = self.state.message;
    let hide = self.state.hide;

    if (self.state.open) {

      return (
        <div className="alert-wrapper">
          <div className={`alert alert-${alertType} alert-dismissible ${hide ? 'animate-fadeOut' : 'animate-bounceInDown'}`}>
            <button type="button" className="close" data-dismiss="alert" onClick={self.fadeOut}>×</button>
            <strong>
              <i className="material-icons">info</i>
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
