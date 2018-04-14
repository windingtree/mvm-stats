import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const SellPrice = props => {

  const { sellPriceTitle, sellPriceUSD, sellPriceETH } = props
  return (
    <React.Fragment>
      <b className="d-block d-sm-inline text-center text-sm-left">{sellPriceTitle}</b>
      <hr className="d-block d-sm-none mt-1 mb-2"/>
      <div className="text-center text-sm-left float-sm-right">
        <b className="ml-3">USD:</b> <span className="font--alt">{parseFloat(sellPriceUSD).toFixed(6)}</span>
        <span className="ml-3 text-light">|</span>
        <b className="ml-3">ETH:</b> <span className="font--alt">{parseFloat(sellPriceETH).toFixed(6)}</span>
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
