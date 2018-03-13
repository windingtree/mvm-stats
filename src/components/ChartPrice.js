import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SellPriceContainer from './SellPriceContainer'

// Modules
var LineChart = require("react-chartjs").Line;

const ChartPrice = props => {

  const { chartData, chartOptions, showChartHeader } = props

  return (
    <div className="chart-wrapper  animated tdShrinkIn  col-lg-8" >
      {showChartHeader &&
        <div className="chart-wrapper__header">
          <SellPriceContainer />
        </div>
      }
      <LineChart data={chartData} options={chartOptions} width="640" height="320"/>
    </div>
  )
}

export default ChartPrice;
