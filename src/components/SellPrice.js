import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const SellPrice = props => {

  const { sellPriceTitle, sellPriceUSD, sellPriceETH } = props;
  
  return (
    <React.Fragment>
      <b>{sellPriceTitle}</b>
      <div className="float-right">
        <b className="ml-3">USD:</b> {parseFloat(sellPriceUSD).toFixed(6)}
        <span className="ml-3 text-light">|</span>
        <b className="ml-3">ETH:</b> {parseFloat(sellPriceETH).toFixed(6)}
      </div>
    </React.Fragment>
  )
}

SellPrice.defaultProps =  {
  sellPriceTitle: "Sell Price",
  sellPriceUSD: "...",
  sellPriceETH: "..."
}

export default SellPrice;
