import React, { Component } from 'react';
import CardStat from '../components/CardStat.js'
import EtherScanFetcher from '../components/EtherScanFetcher.js'
import ScrollAnimation from 'react-animate-on-scroll';

const mvmFundsProps = {
  mainTitile: 'MVM Funds (ETH)',
  icon:'account_balance_wallet',
  textColor: 'text-primary',
};
const mvmStageProps = {
  mainTitile: 'MVM Stage',
  icon: 'timelapse',
  textColor: 'text-danger',
};
const mvmBurnedProps = {
  mainTitile: 'Tokens Burned',
  icon:'whatshot',
  textColor: 'text-info',
};
const mvmBurnedCallData = '0x555f323a';
const mvmStageCallData = '0xb4f5a21a';

export default class CardStatGroup extends Component {

  constructor(props) {
    super(props);
  }

  _renderBalanceCardStats = value => <CardStat { ...mvmFundsProps } mainValue={value}/>
  _renderBurnedCardStats = value => <CardStat { ...mvmBurnedProps } mainValue={parseInt(value/10**18)}/>
  _renderStageCardStats = value => <CardStat { ...mvmStageProps } mainValue={`${value+1}/24`}/>

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-4">
          <ScrollAnimation animateIn="tdFadeInRight" animateOnce={true}>
            <div className="card ml-lg-4 mr-lg-4 mb-5" style={{maxWidth: 300, margin: '0 auto'}}>
            <EtherScanFetcher callData={'balance'}
              render={this._renderBalanceCardStats}
            />
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-12 col-md-4">
          <ScrollAnimation animateIn="tdFadeInUp" animateOnce={true}>
            <div className="card ml-lg-4 mr-lg-4 mb-5" style={{maxWidth: 300, margin: '0 auto'}}>
            <EtherScanFetcher callData={mvmStageCallData}
              render={this._renderStageCardStats}
            />
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-12 col-md-4">
          <ScrollAnimation animateIn="tdFadeInLeft" animateOnce={true}>
            <div className="card ml-lg-4 mr-lg-4 mb-5" style={{maxWidth: 300, margin: '0 auto'}}>
              <EtherScanFetcher callData={mvmBurnedCallData}
                render={this._renderBurnedCardStats}
              />
            </div>
          </ScrollAnimation>
        </div>
      </React.Fragment>
    );
  }
}
