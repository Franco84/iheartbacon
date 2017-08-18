import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css';
import CloudyNights from './CloudyNights.mp4'
import Joblist from './components/Joblist'
import helpers from './actions';

class App extends Component {
  constructor() {
    super()
    this.state = {jobs: []}
  }

  async refresh() {
    let results = await helpers.getJobs()
    this.setState({ jobs: results.jobs });
  }

  async componentWillMount() {
      let results = await helpers.getJobs()
      this.setState({ jobs: results.jobs });
  }

  switcher() {
    if(this.state.jobs === []) {
      return (
        <Row>
          <div className="filler-mini"></div>
          <Col xs={4} sm={4} md={4} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4}>
              <p className="white">We're currently looking for jobs..</p>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <div className="filler-mini"></div>
          <Col xs={10} sm={10} md={6} lg={6} xsOffset={1} smOffset={1} mdOffset={3} lgOffset={3}>
            <Joblist results={this.state.jobs} refresh={this.refresh.bind(this)} />
          </Col>
        </Row>
      )
    }
  }

render () {
    return (
        <div>
          <div>
            <video id="background-video" loop muted autoPlay>
              <source src={CloudyNights} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <Grid>

          <Row>
            <div className="filler"></div>
            <Col xs={4} sm={4} md={4} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4}>
              <p className="center white padded home-font"> Welcome to Job Postings, a service provided by <a className="link" href="http://www.thebacon.com">The Bacon</a>.</p>
            </Col>
          </Row>

            {this.switcher()}

        </Grid>
        </div>
    );
  }
}

export default App;
