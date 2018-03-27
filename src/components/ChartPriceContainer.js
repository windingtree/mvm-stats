import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ChartPrice from './ChartPrice'

export default class ChartPriceContainer extends Component {
  constructor() {
    super();

    const distribution24Moths = [
      0, 18, 117, 351, 767, 1407,
      2309, 3511, 5047, 6952, 9257, 11995,
      15196, 18889, 23104, 27870, 33215, 39166,
      45749, 52992, 60921, 69561, 78938, 89076
    ];
    const initialBuyPrice = 20;
    var prices24months = [];
    distribution24Moths.map(function(dist){
      prices24months.push(
        (initialBuyPrice*(100000-dist))/10000000000
      );
    });
    this.state = {
      labels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19 ,20, 21, 22, 23, 24 ],
      buyPriceDataSet : {
        label: "Buy Price (ETH)",
        fillColor: "transparent",
        strokeColor: "#FACE5D",
        pointColor: "#FACE5D",
        data: prices24months,
        bezierCurveTension : 1,
        offsetGridLines : true
      }
    }
  }

  render() {
    const {ethClaimedDataSet, buyPriceDataSet, labels} = this.state;
    const buyPriceChartData = {
      labels,
      datasets: [buyPriceDataSet]
    }
    return <ChartPrice chartData={buyPriceChartData} />;

  }
}
