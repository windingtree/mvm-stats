import React, { Component } from 'react';

export default class AppFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'footer'
    };
  }

  render() {
    const lifLogo = '../img/content/logo-lif-w.svg';

    return (
      <footer id="app-footer">
        <div className="container">
          <div className="row">
            <section className="col-12 col-md-6">
              <h4><strong>About Winding Tree</strong></h4>
              <p className="font--alt">Winding Tree is a blockchain-based decentralized <a href="https://github.com/windingtree/">open-source</a> travel distribution platform. We make travel cheaper for the end user, while making it more profitable for suppliers.</p>
              <p><a href="https://windingtree.com" className="btn btn-primary btn-sm mb-3">Visit our website</a></p>
            </section>
            <section className="col-12 col-md-6">
               <h4><strong>Winding Tree Limited</strong></h4>
              <p className="font--alt">Suite 23 Portland House, Glacis Road<br/>Gibraltar GX11 1AA</p>
              <ul className="list-unstyled font--alt">
                <li><i className="wicon-github-circled text-primary"></i> <a href="https://github.com/windingtree/">GitHub</a></li>
                <li><i className="wicon-twitter text-primary"></i> <a href="https://twitter.com/windingtree">Twitter</a></li>
                <li><i className="wicon-link text-primary"></i> <a href="http://demo.windingtree.com/">Demo App</a></li>
              </ul>
            </section>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="mb-0 font--alt">© Winding Tree</p>
            </div>
          </div>
        </div>


        <div className="pulse-container">
          <div className="pulse-box">
            <svg className="pulse-svg" width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="circle first-circle" cx="25" cy="25" r="25"></circle>
              <circle className="circle second-circle" cx="25" cy="25" r="25"></circle>
              <circle className="circle third-circle" cx="25" cy="25" r="25"></circle>
              <circle className="circle" fill="none" cx="25" cy="25" r="25"></circle>
            </svg>
          </div>
        </div>

      </footer>
    );
  }
}
