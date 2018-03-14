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
      fetchedValue : -1,
    }
  }
  componentDidMount() {
    const {toContract, callData} = this.props;
    this._fetchFromEtherscan(CONFIG.mvmContract, callData)
  }

  _fetchFromEtherscan = (toContract, callData) => {
    const url = `https://api.etherscan.io/api?${staticParams}&to=${toContract}&data=${callData}`
     return fetch(url)
     .then(res => res.json())
     .then(({result}) => {
       this.setState({fetchedValue: parseInt(result, 16)})
     })
  }

  render() {
    const {fetchedValue} = this.state;
    return this.props.render(fetchedValue);
  }
}
