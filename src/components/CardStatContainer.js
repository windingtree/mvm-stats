import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';
import CardStat from './CardStat'

const staticParams='module=proxy&action=eth_call&tag=latest&apikey=5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB'

export default class CardStatContainer extends Component {
  constructor() {
    super();
    this.state = {
      mainValue : -1
    }
  }
  componentDidMount() {
    const {toContract, callData} = this.props;
    if(!toContract || !callData) return;
    this._fetchFromEtherscan(toContract, callData)
  }
  _fetchFromEtherscan = (toContract, callData) => {
    const url = `https://api.etherscan.io/api?${staticParams}&to=${toContract}&data=${callData}`
     return fetch(url)
     .then(res => res.json())
     .then(({result}) =>
       this.setState({mainValue: parseInt(result, 16)})
   )
  }

  render() {
    const {mainValue} = this.state;
    const props = this.props;
    return <CardStat mainValue={mainValue} {...props}/>;
  }
}
