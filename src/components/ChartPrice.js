import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Line as LineChart } from 'react-chartjs';
import SellPriceContainer from './SellPriceContainer';
import EtherScanFetcher from '../components/EtherScanFetcher.js'

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

const _renderSellPriceContainer = value => {
  return <SellPriceContainer sellPriceETH={value}/>
}

ChartPrice.defaultProps = {
  chartOptions : {
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
  },
  showChartHeader: true
};

export default ChartPrice;
