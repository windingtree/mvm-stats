import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const SellPrice = props => {

  const { sellPriceTitle, sellPriceUSD, sellPriceETH } = props;
  
  return (
    <React.Fragment>
      <b>{sellPriceTitle}</b>
      <div className="float-right">
        <b className="ml-3">USD:</b> {sellPriceUSD}
        <span className="ml-3 text-light">|</span>
        <b className="ml-3">ETH:</b> {sellPriceETH}
      </div>
    </React.Fragment>
  )
}

SellPrice.defaultProps =  {
  sellPriceTitle: "Sell Price",
  sellPriceUSD: "750",
  sellPriceETH: "1"
}

export default SellPrice;
