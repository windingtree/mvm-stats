import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChartPrice from './ChartPrice'

export default class ChartPriceContainer extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const {chartData, chartOptions, showChartHeader} = this.props;
    return <ChartPrice chartData={chartData} chartOptions={chartOptions} showChartHeader={showChartHeader} />;
  }
}
