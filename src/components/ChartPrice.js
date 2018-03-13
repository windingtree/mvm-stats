import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SellPriceContainer from './SellPriceContainer';

// Modules
import { Line as LineChart } from 'react-chartjs';

const ChartPrice = props => {

  const { chartData, chartOptions, showChartHeader } = props;

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

ChartPrice.defaultProps =  {
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

export default ChartPrice;
