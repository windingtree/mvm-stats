import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChartPrice from './ChartPrice'

export default class ChartPriceContainer extends Component {

  static defaultProps =  {
    showChartHeader: true,
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
      maintainAspectRatio: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      }
    }
  }

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const {chartData, chartOptions, showChartHeader} = this.props
    return <ChartPrice chartData={chartData} chartOptions={chartOptions} showChartHeader={showChartHeader} />;
  }
}
