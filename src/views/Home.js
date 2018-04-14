import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ChartPriceContainer from '../components/ChartPriceContainer.js'
import CardStatGroup from '../components/CardStatGroup.js'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'home',
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    $('[data-toggle="tooltip"]').tooltip();
  }

  render () {
    const {showAlert} = this.props;

    return (
      <div id="app-content" role="main">

        <div id="app-hero" className="app-hero--pull-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ScrollAnimation animateIn="tdFadeInUp" offset={0} >
                  <h3 className="h6"><strong>WINDINGTREE.COM</strong></h3>
                  <h2><strong>Lif Market Validation Mechanism</strong></h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="tdShrinkIn" offset={0} animateOnce={true}>
                  <ChartPriceContainer />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>


        <article className="container">
          <div className="row">
            <CardStatGroup />
          </div>

          <div className="row">
            <div className="col text-center">
              <p className="h1 mr-2 mb-3"><strong>Have questions?</strong></p>
              <Link to="FAQ" className="btn btn-accent btn-xl mb-4">Check the <strong>FAQ</strong></Link>
            </div>
          </div>

        </article>

      </div>
    )
  }
}
