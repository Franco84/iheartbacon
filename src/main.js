import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css';
import CloudyNights from './CloudyNights.mp4'

class App extends Component {

render () {
    return (
      <MuiThemeProvider>
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
            <Col xs={4} sm={4} md={4} lg={4}>
              <p className="center white"> Welcome to Job Postings, a service provided by <a className="link" href="http://www.thebacon.com">The Bacon</a>.</p>
            </Col>
            <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4} lg={4} lgOffset={4}>
              <p className="center white"> Welcome to Job Postings, a service provided by <a className="link" href="http://www.thebacon.com">The Bacon</a>.</p>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <p className="center white"> Welcome to Job Postings, a service provided by <a className="link" href="http://www.thebacon.com">The Bacon</a>.</p>
            </Col>
          </Row>
        </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
