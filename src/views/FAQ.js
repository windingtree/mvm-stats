import React, {Component} from 'react';

export default class FAQ extends Component {

  static defaultProps =  {
    questions: [
      [ 'How it works?',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'],
      [ 'How to sell tokens back to the MVM',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'],
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'guide to sell'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    const {showAlert, questions} = this.props;
const faqLenght = questions.length;
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

                    { index<faqLenght-1 && <hr className="mb-4"/> }
                  </React.Fragment>
                )
              }

            </div>
          </div>
        </div>

      </div>
    )
  }
}
