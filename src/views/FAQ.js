import React, {Component} from 'react';
import Web3 from 'web3';

const web3 = new Web3();

const contracts = {
  token: {
    address: "0xeb9951021698b42e4399f9cbb6267aa35f82d59d",
    abi:[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"burner","type":"address"},{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SYMBOL","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
  },
  mvm: {
    address: "0x27218c41e1054dC0484ACD2aD35DEF0ffd17782A",
    abi:[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalPausedSeconds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lifToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMaxClaimableWeiAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"secondsPerPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBurnedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newToken","type":"address"}],"name":"changeToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAccumulatedDistributionPercentage","outputs":[{"name":"percentage","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isFinished","outputs":[{"name":"finished","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pausedTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalReimbursedWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWeiClaimed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentPeriodIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"calculateDistributionPeriods","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"claimWei","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"originalTotalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"periods","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"funded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"sendTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalPeriods","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"foundationAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"lifAddr","type":"address"},{"name":"_startTimestamp","type":"uint256"},{"name":"_secondsPerPeriod","type":"uint256"},{"name":"_totalPeriods","type":"uint8"},{"name":"_foundationAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pausedSeconds","type":"uint256"}],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"claimedWei","type":"uint256"}],"name":"ClaimedWei","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"tokens","type":"uint256"},{"indexed":false,"name":"returnedWei","type":"uint256"}],"name":"SentTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
  }
}

const mvmContract = new web3.eth.Contract(contracts.mvm.abi, contracts.mvm.address);
const tokenContract = new web3.eth.Contract(contracts.token.abi, contracts.token.address);

export default class FAQ extends Component {

  static defaultProps =  {
    questions: [
      [ 'How it works?',
        'The MVM (Market Validation Mechanism) is a smart contract that will be active till the 27/03/2020 that will buy tokens back at a price floor, all the tokens sent to the MVM will be burned.'],
      [ 'How to sell tokens back to the MVM',
        'In order to sell tokens back you need to send two transactions with data from the address where you hold your tokens. First you need to allow the tokens to be burnt by the MVM, and then send them to the MVM and you will receive ETH and the tokens will be burned.'],
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'guide to sell',
      tokensAmount: 0.01,
      approveData: "0x0",
      sellTokensData: "0x0"
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  generateData(tokensAmount){
    const lifAmount = web3.utils.toWei(tokensAmount);
    this.setState({
      approveData: tokenContract.methods.approve(contracts.mvm.address, lifAmount).encodeABI(),
      sellTokensData: mvmContract.methods.sendTokens(lifAmount).encodeABI()
    });
  }

  render () {
    const {showAlert, questions} = this.props;
    const faqLenght = questions.length;
    var self = this;
    return (
      <div id="app-content">

        <div id="app-hero" className="app-hero--compact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="h6"><strong>WINDINGTREE.COM</strong></h3>
                <h2 className="mb-0"><strong>Lif Market Validation Mechanism</strong></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="mb-5"><strong>Frequently Asked Questions</strong></h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {

                questions.map((question, index) =>
                  <React.Fragment key={question[0]}>
                    <h3>
                      <i className="fas fa-arrow-right fa-xs text-danger  animated tdFadeInRight"></i>&nbsp;
                      <strong className="text-secondary  animated tdFadeIn">{question[0]}</strong>
                    </h3>
                    <p className="text--lg  animated tdFadeIn">{question[1]}</p>
                    <hr className="mb-4"/>
                  </React.Fragment>
                )
              }
              <h3>
                <i className="fas fa-arrow-right fa-xs text-danger  animated tdFadeInRight"></i>&nbsp;
                <strong className="text-secondary  animated tdFadeIn">Generate Transactions Data</strong>
              </h3>
              <form className="col-4">
                <div className="form-group">
                  <label htmlFor="sellAmountInput">Tokens to sell</label>
                  <input type="number" className="form-control" id="sellAmountInput" min="0" step="0.01" onChange={(event) => {self.generateData(event.target.value)}}/>
                </div>
              </form>
              <h4>
                <strong className="text-secondary  animated tdFadeIn">First Transaction</strong>
              </h4>
              <p className="text--lg  animated tdFadeIn">To: <strong>lif.windingtree.eth - 0xeb9951021698b42e4399f9cbb6267aa35f82d59d</strong></p>
              <p className="text--lg  animated tdFadeIn">Gas: <small>100000</small></p>
              <p className="text--lg  animated tdFadeIn">Data: <small>{self.state.approveData}</small></p>
              <h4>
                <strong className="text-secondary  animated tdFadeIn">Second Transaction</strong>
              </h4>
              <p className="text--lg  animated tdFadeIn">To: <strong>mvm.windingtree.eth - 0x27218c41e1054dC0484ACD2aD35DEF0ffd17782A</strong></p>
              <p className="text--lg  animated tdFadeIn">Gas: <small>200000</small></p>
              <p className="text--lg  animated tdFadeIn">Data: <small>{self.state.sellTokensData}</small></p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
