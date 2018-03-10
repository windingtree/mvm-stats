import React, { Component } from 'react';
import Stat from '../components/Stat.js'

export default class StatsLayout extends Component {

  static defaultProps =  {
    mvmStageProps : {
      mainTitile: 'MVM Stage',
      mainValue: '3/6',
      linkTitle: 'More info...',
      link: 'FAQ',
      icon: 'timelapse',
    },
    mvmFundsProps : {
       mainTitile: 'MVM Funds',
       mainValue: '16,278',
       linkTitle: 'More info...',
       link: 'FAQ',
       icon:'timelapse',
     },
     mvmBurnedProps : {
        mainTitile: 'Tokens Burned',
        mainValue: '25 M',
        linkTitle: 'More info...',
        link: 'FAQ',
        icon:'whatshot',
      },
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'StatsLayout'
    };
  }

  render() {
    const {mvmStageProps, mvmFundsProps, mvmBurnedProps} = this.props
    return (
      <React.Fragment>
        <div className="col-12 col-md-4  justify-self-center">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <Stat { ...mvmFundsProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <Stat { ...mvmStageProps }/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card ml-lg-4 mr-lg-4 mb-5  animated tdFadeInUp" style={{maxWidth: 300, margin: '0 auto'}}>
            <Stat { ...mvmBurnedProps }/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
