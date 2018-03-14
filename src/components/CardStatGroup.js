import React, { Component } from 'react';
import CardStat from '../components/CardStat.js'
import EtherScanFetcher from '../components/EtherScanFetcher.js'

const mvmFundsProps = {
  mainTitile: 'MVM Funds',
  mainValue: '16,278',
  icon:'account_balance_wallet',
  textColor: 'text-success',
};
const mvmStageProps = {
  mainTitile: 'MVM Stage',
  icon: 'timelapse',
  textColor: 'text-dark',
};
const mvmBurnedProps = {
  mainTitile: 'Tokens Burned',
  icon:'whatshot',
  textColor: 'text-danger',
};
const mvmBurnedCallData = '0x555f323a';
const mvmStageCallData = '0xb4f5a21a';

export default class CardStatGroup extends Component {

  constructor(props) {
    super(props);
  }

  _renderBurnedCardStats = value => <CardStat { ...mvmBurnedProps } mainValue={value}/>
  _renderStageCardStats = value => <CardStat { ...mvmStageProps } mainValue={`${value}/24`}/>

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <CardStat { ...mvmFundsProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
          <EtherScanFetcher callData={mvmBurnedCallData}
            render={this._renderStageCardStats}
          />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <EtherScanFetcher callData={mvmBurnedCallData}
              render={this._renderBurnedCardStats}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
