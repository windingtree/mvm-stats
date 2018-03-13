import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SellPrice from './SellPrice'

export default class SellPriceContainer extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const {sellPriceTitle, sellPriceUSD, sellPriceETH} = this.props;
    return (
      <SellPrice
        sellPriceTitle={sellPriceTitle}
        sellPriceUSD={sellPriceUSD}
        sellPriceETH={sellPriceETH}
      />
    );
  }

}
