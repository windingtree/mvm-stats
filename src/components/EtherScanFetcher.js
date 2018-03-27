import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';
import CONFIG from '../../config.js'

const staticParams='module=proxy&action=eth_call&tag=latest&apikey=5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB'

export default class EtherScanFetcher extends Component {
  static defaultProps = {
    toContract : CONFIG.mvmContract
  }

  constructor(props) {
    super(props);
    this.state = {
      fetchedValue : 0,
    }
  }
  componentDidMount() {
    const {toContract, callData} = this.props;
    if (callData == 'balance') {
      this._fetchBalanceFromEtherscan(CONFIG.mvmContract)
    } else {
      this._fetchUintFromEtherscan(CONFIG.mvmContract, callData)
    }
  }

  _fetchUintFromEtherscan = (toContract, callData) => {
    const url = `https://api.etherscan.io/api?${staticParams}&to=${toContract}&data=${callData}`
     return fetch(url)
     .then(res => res.json())
     .then(({result}) => {
       let value = result.split('x')[1];
       if (!value) value = 0;
       this.setState({fetchedValue: parseInt(value, 16)})
     })
  }

  _fetchBalanceFromEtherscan = (ofAddress) => {
    const url = `https://api.etherscan.io/api?module=account&action=balance&apikey=5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB&address=${ofAddress}`
     return fetch(url)
     .then(res => res.json())
     .then(({result}) => {
       this.setState({fetchedValue: parseInt(result/10**18)})
     })
  }

  render() {
    const {fetchedValue} = this.state;
    return this.props.render(fetchedValue);
  }
}
