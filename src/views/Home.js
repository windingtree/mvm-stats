import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Modules
var LineChart = require("react-chartjs").Line;

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'home',
      chartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: "Prime and Fibonacci",
          fillColor: "transparent",
          strokeColor: "#FACE5D",
          pointColor: "#FACE5D",
          data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        }, {
          label: "My Second dataset",
          fillColor: "transparent",
          strokeColor: "#FF6384",
          pointColor: "#FF6384",
          data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        }]
      },
      chartOptions: {
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    $('[data-toggle="tooltip"]').tooltip();
  }

  render () {
    const {chartData, chartOptions} = this.state;
    const {showAlert} = this.props;

    return (
      <div id="app-content">

        <div id="app-hero" className="app-hero--pull-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="h6"><strong>WINDINGTREE.COM</strong></h3>
                <h2><strong>Lif Market Validation Mechanism</strong></h2>
                <svg height="4" width="80">
                  <line x1="0" y1="0" x2="80" y2="0" style={{stroke: '#fff', strokeWidth:4}} />
                </svg>
                <div className="chart-wrapper  animated tdShrinkIn">
                  <div className="chart-wrapper__header">
                    Sell Price
                  </div>
                  <LineChart data={chartData} options={chartOptions} width="640" height="320"/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <article className="container">
          <div className="row">

            <div className="col-12 col-md-4  justify-self-center">
              <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
                <div className="card-body text-center">
                  <Link
                    onMouseDown={()=>$('[data-toggle="tooltip"]').tooltip('hide') }
                    to="FAQ" className="card-icon" data-toggle="tooltip" data-placement="top" title="More info...">
                    <i className="material-icons link-light">help_outline</i>
                  </Link>
                  <i className="material-icons material-icons--xl">account_balance_wallet</i>
                  <h1 className="h5 card-title text-muted"><strong>MVM Funds</strong></h1>
                  <p className="card-text text--xl text-success"><strong>16,278</strong></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
                <div className="card-body text-center">
                  <Link
                    onMouseDown={()=>$('[data-toggle="tooltip"]').tooltip('hide') }
                    to="FAQ" className="card-icon" data-toggle="tooltip" data-placement="top" title="More info...">
                    <i className="material-icons link-light">help_outline</i>
                  </Link>
                  <i className="material-icons material-icons material-icons--xl">timelapse</i>
                  <h1 className="h5 card-title text-muted"><strong>MVM Stage</strong></h1>
                  <p className="card-text text--xl text-dark"><strong>3/6</strong></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
                <div className="card-body text-center">
                  <Link
                    onMouseDown={()=>$('[data-toggle="tooltip"]').tooltip('hide') }
                    to="FAQ" className="card-icon" data-toggle="tooltip" data-placement="top" title="More info...">
                    <i className="material-icons link-light">help_outline</i>
                  </Link>
                  <i className="material-icons material-icons material-icons--xl">whatshot</i>
                  <h1 className="h5 card-title text-muted"><strong>Tokens Burned</strong></h1>
                  <p className="card-text text--xl text-danger"><strong>25 M</strong></p>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col text-center">
              <p className="h1 mr-2 mb-3"><strong>Have questions?</strong></p>
              <Link to="FAQ" className="btn btn-info btn-xl mb-4">Check the <strong>FAQ</strong></Link>
            </div>
          </div>

        </article>

      </div>
    )
  }
}
