import React, { Component } from 'react';
import {Modal, Button, Tooltip, OverlayTrigger, FormControl, FormGroup, Checkbox, Radio} from 'react-bootstrap';
import axios from 'axios'

class Deletebutton extends Component {
  constructor(props) {
    super(props)
    this.state = { id: this.props.job.id }
  }

  remove() {
    let info = this.state
    axios.delete('/jobs/' + this.state.id)
    setTimeout(() => {
      this.props.callback()
    }, 200);
  }

  render() {
    return (
        <Button
          bsStyle="primary"
          onClick={this.remove.bind(this)}>
          Delete
        </Button>
    )
  }
}

export default Deletebutton;
