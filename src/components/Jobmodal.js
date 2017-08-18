import React, { Component } from 'react';
import {Modal, Button, Tooltip, OverlayTrigger, FormControl, FormGroup, Checkbox, Radio} from 'react-bootstrap';
import axios from 'axios'

class Jobmodal extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, travel: false, experience: 1, worktype: 1, email: "" }
  }

  close() {
    this.setState({ ...this.state, showModal: false });
  }

  add() {
    let info = this.state
    axios.post('http://iheartbaconapi.herokuapp.com/jobs/', {
    info
  })
    this.setState({ ...this.state, showModal: false });
    setTimeout(() => {
      this.props.callback()
    }, 200);
  }

  open() {
    this.setState({ ...this.state, showModal: true });
  }

  travelHandler(e) {
    this.setState({ ...this.state, travel: e })
  }

  experienceHandler(e) {
    this.setState({ ...this.state, experience: parseInt(e) })
  }

  workTypeHandler(e) {
    this.setState({ ...this.state, worktype: parseInt(e) })
  }

  titleHandler(e) {
    this.setState({ ...this.state, title: e })
  }

  descriptionHandler(e) {
    this.setState({ ...this.state, description: e })
  }

  emailHandler(e) {
    this.setState({ ...this.state, email: e })
  }

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip">
        Select this if the employee is expected to travel at least 10% of the time.
      </Tooltip>
    );

    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    if(this.state.email === "") {
      var controlId = "formValidationNull"
      var validation = null
  } else if(emailTest.test(this.state.email)) {
      controlId = "formValidationSuccess2"
      validation = "success"
  } else {
      controlId = "formValidationError2"
      validation = "error"
    }

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}>
          Add A New Job
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Job Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl type="text" value={this.state.title} placeholder="Position Title" onChange={e => this.titleHandler(e.target.value)} />
            <br />
            <FormControl componentClass="textarea" type="textarea" value={this.state.description} placeholder="Job Description" onChange={e => this.descriptionHandler(e.target.value)} />
            <br />
            <p>Experience Level:</p>
            <Radio inline={true} value={1} checked={this.state.experience === 1} onChange={e => this.experienceHandler(e.target.value)}>Entry Level</Radio>
            <Radio inline={true} value={2} checked={this.state.experience === 2} onChange={e => this.experienceHandler(e.target.value)}>Mid Level</Radio>
            <Radio inline={true} value={3} checked={this.state.experience === 3} onChange={e => this.experienceHandler(e.target.value)}>Senior Level</Radio>
            <br />
            <br />
            <p>Employement Type:</p>
            <Radio inline={true} value={1} checked={this.state.worktype === 1} onChange={e => this.workTypeHandler(e.target.value)}>Full-Time</Radio>
            <Radio inline={true} value={2} checked={this.state.worktype === 2} onChange={e => this.workTypeHandler(e.target.value)}>Part-Time</Radio>
            <Radio inline={true} value={3} checked={this.state.worktype === 3} onChange={e => this.workTypeHandler(e.target.value)}>Contract</Radio>
            <Checkbox onClick={e => this.travelHandler(e.target.checked)}>Travel Required <OverlayTrigger overlay={tooltip}><a href="#">?</a></OverlayTrigger></Checkbox>
            <hr />
            <p>Your Email Address:</p>
            <br />
            <FormGroup controlId={controlId} validationState={validation}>
              <FormControl type="text" value={this.state.email} placeholder="Email.." onChange={e => this.emailHandler(e.target.value)} />
              <FormControl.Feedback />
              </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add.bind(this)}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Jobmodal;
