import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Line as LineChart } from 'react-chartjs';
import SellPriceContainer from './SellPriceContainer';
import EtherScanFetcher from '../components/EtherScanFetcher.js'
import SellPrice from './SellPrice'

const sellPriceCallData = '0x018a25e8'

const ChartPrice = props => {

  const { chartData, chartOptions, showChartHeader } = props;

  return (
    <div className="chart-wrapper  animated tdShrinkIn  col-lg-8" >
      {showChartHeader &&
        <div className="chart-wrapper__header">
          <EtherScanFetcher callData={sellPriceCallData}
            render={_renderSellPriceContainer}
          />
        </div>
      }
      <LineChart data={chartData} options={chartOptions} width="640" height="320"/>
    </div>
  )
}

const accumDistribution = [0.018, 0.117, 0.351, 0.767, 1.407, 2.309, 3.511, 5.047, 6.952, 9.257, 11.995, 15.196, 18.889, 23.104, 27.870,
  33.215, 39.166, 45.749, 52.992, 60.921, 69.561, 78.938, 89.076, 100];
const totalSupply = 24976541;
const initialETH = 5164;
var buyPrices = [];
for (var i = 0; i < accumDistribution.length; i++)
  buyPrices.unshift(parseFloat((initialETH/totalSupply) * accumDistribution[i]).toFixed(5));

ChartPrice.defaultProps =  {
  showChartHeader: true,
  chartData: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21, 22, 23, 24],
    datasets: [{
      label: "Buy Price (ETH)",
      fillColor: "transparent",
      strokeColor: "#FACE5D",
      pointColor: "#FACE5D",
      data: buyPrices,
      bezierCurveTension : 1,
      offsetGridLines : true
    }, {
      label: "% of ETH Claimed",
      fillColor: "transparent",
      strokeColor: "#FF6384",
      pointColor: "#FF6384",
      data: accumDistribution
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

const _renderSellPriceContainer = value => {
  return <SellPrice sellPriceETH={value}/>
}
export default ChartPrice;
