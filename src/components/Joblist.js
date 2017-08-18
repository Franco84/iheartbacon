import React, { Component } from 'react';
import Jobmodal from './Jobmodal';
import Collapsible from './Collapsible'
import helpers from '../actions';

class Joblist extends Component {
  constructor(props) {
    super(props)
    this.state = {jobs: props.results}
  }
    componentWillReceiveProps(nextProps) {
    }

    async componentWillMount() {
          let results = await helpers.getJobs()
          this.setState({ jobs: results });
    }

  switcher() {
    var _this = this
    if(this.props.results.length === 0) {
      return (
        <div>
          <Progress />
        </div>
      )
    } else {
      return (
        <div className="center">
          <Jobmodal callback={this.props.refresh} />
          <div className="filler-mini"></div>
          <p className="center white padded home-font"> Open Positions:</p>
          <div className="padding-bottom">
          {this.props.results.map(function(item,index) {
            return (
              <div>
                <Collapsible callback={_this.props.refresh} className="white center" info={item} />
                <hr />
              </div>
            )
          })}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.switcher()}
      </div>
    );
  }
}

export default Joblist;
