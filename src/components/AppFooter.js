import React, { Component } from 'react';

export default class AppFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'footer'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const lifLogo = '../img/content/logo-lif-w.svg';

    return (
      <footer id="app-footer">
        <div className="container">
          <div className="row">
            <section className="col-12 col-md-6">
              <h4><strong>About Winding Tree</strong></h4>
              <p>Winding Tree is a blockchain-based decentralized <a href="https://github.com/windingtree/">open-source</a> travel distribution platform. We make travel cheaper for the end user, while making it more profitable for suppliers.</p>
              <p><a href="https://windingtree.com" className="btn btn-primary btn-sm mb-3">Learn More</a></p>
            </section>
            <section className="col-12 col-md-6">
               <h4><strong>Winding Tree Limitedding Tree Limited</strong></h4>
              <p>Suite 23 Portland House, Glacis Road<br/>Gibraltar GX11 1AA</p>
              <ul className="list-unstyled">
                <li><i className="fab fa-github text-primary"></i> <a href="https://github.com/windingtree/">GitHub</a></li>
                <li><i className="fab fa-twitter text-primary"></i> <a href="https://twitter.com/windingtree">Twitter</a></li>
                <li><i className="fas fa-link text-primary"></i> <a href="http://demo.windingtree.com/">Demo App</a></li>
              </ul>
            </section>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="mb-0">© Winding Tree</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
