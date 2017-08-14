import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css';
import { Button } from 'material-ui';
import CloudyNights from './CloudyNights.mp4'

class App extends Component {

render () {
    return (
        <div>
          <div>
            <video id="background-video" loop autoPlay>
              <source src={CloudyNights} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <Grid>
          <Row>
          <div className="filler"></div>
          </Row>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4}>
              <p className="center white padded home-font"> Welcome to Job Postings, a service provided by <a className="link" href="http://www.thebacon.com">The Bacon</a>.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={4}>
              <div className="text-center">
                <Button><span className="center white">Add A New Posting</span></Button>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
    );
  }
}

export default App;
