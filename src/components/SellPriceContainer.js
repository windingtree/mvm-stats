import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SellPrice from './SellPrice'

export default class SellPriceContainer extends Component {

  constructor() {
    super();
    this.state = {
      ethUsdPrice: 0
    }
  }

  componentDidMount() {
    const url = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD`
    const res = fetch(url)
      .then(res => res.json())
      .then(response => {
        const {price_usd} = response[0]
        this.setState({ethUsdPrice: price_usd});
      })
  }

  render() {
    const {sellPriceTitle, sellPriceETH} = this.props;
    const {ethUsdPrice} = this.state;
    return <SellPrice
            sellPriceUSD={sellPriceETH * ethUsdPrice}
            sellPriceETH={sellPriceETH} />;
  }
}
