import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChartPrice from './ChartPrice'

export default class ChartPriceContainer extends Component {
  constructor() {
    super();
    this.state = {
      labels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19 ,20, 21, 22, 23, 24 ],
      buyPriceDataSet : {
        label: "Buy Price (ETH)",
        fillColor: "transparent",
        strokeColor: "#FACE5D",
        pointColor: "#FACE5D",
        data: [ 0.02068, 0.01842, 0.01632, 0.01438, 0.0126, 0.01096, 0.00946,
                0.0081, 0.00687, 0.00576, 0.00478, 0.00391, 0.00314, 0.00248,
                0.00191, 0.00144, 0.00104, 0.00073, 0.00048, 0.00029, 0.00016,
                0.00007, 0.00002, 0 ],
        bezierCurveTension : 1,
        offsetGridLines : true
      },
      ethClaimedDataSet : {
        label: "% of ETH Claimed",
        fillColor: "transparent",
        strokeColor: "#FF6384",
        pointColor: "#FF6384",
        data: [ 0.018, 0.117, 0.351, 0.767, 1.407, 2.309, 3.511, 5.047, 6.952,
                9.257, 11.995, 15.196, 18.889, 23.104, 27.870, 33.215, 39.166,
                45.749, 52.992, 60.921, 69.561, 78.938, 89.076, 100 ]
      }
    }
  }

  render() {
    const {chartOptions, ethClaimedDataSet, buyPriceDataSet, labels} = this.state;
    const ethClaimedChartData = {
      labels,
      datasets: [ethClaimedDataSet]
    }
    const buyPriceChartData = {
      labels,
      datasets: [buyPriceDataSet]
    }
    return (
      <React.Fragment>
        <ChartPrice chartData={ethClaimedChartData} chartOptions={chartOptions} />
        <ChartPrice chartData={buyPriceChartData} chartOptions={chartOptions} />
      </React.Fragment>
    );
  }
}
