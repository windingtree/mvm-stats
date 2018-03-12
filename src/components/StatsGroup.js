import React, { Component } from 'react';
import StatContainer from '../components/StatContainer.js'

export default class StatsLayout extends Component {

  static defaultProps =  {
    mvmFundsProps : {
       mainTitile: 'MVM Funds',
       mainValue: '16,278',
       linkTitle: 'More info...',
       link: 'FAQ',
       icon:'account_balance_wallet',
       textColor: 'text-success',
     },
    mvmStageProps : {
      mainTitile: 'MVM Stage',
      mainValue: '3/6',
      linkTitle: 'More info...',
      link: 'FAQ',
      icon: 'timelapse',
      textColor: 'text-dark',
    },
     mvmBurnedProps : {
        mainTitile: 'Tokens Burned',
        linkTitle: 'More info...',
        link: 'FAQ',
        icon:'whatshot',
        callData: '0x555f323a',
        toContract: '0x27218c41e1054dC0484ACD2aD35DEF0ffd17782A',
        textColor: 'text-danger',
      },
  }
  constructor(props) {
    super(props);
  }

  render() {
    const {mvmStageProps, mvmFundsProps, mvmBurnedProps} = this.props
    return (
      <React.Fragment>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <StatContainer { ...mvmFundsProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <StatContainer { ...mvmStageProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <StatContainer { ...mvmBurnedProps }/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
