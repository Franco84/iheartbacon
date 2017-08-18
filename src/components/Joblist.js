import React, { Component } from 'react';
import Progress from './Progress';
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
    if(this.props.results.length === 0) {
      return (
        <div>
          <Progress />
        </div>
      )
    } else {
      debugger
      return (
        <div className="center">
          <Jobmodal callback={this.props.refresh} />
          <p className="center white padded home-font"> Open Positions:</p>
          <div className="padding-bottom">
          {this.props.results.map(function(item) {
            return (
              <div>
                <Collapsible className="white center" info={item} />
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
