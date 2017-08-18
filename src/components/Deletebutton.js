import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios'

class Deletebutton extends Component {
  constructor(props) {
    super(props)
    this.state = { id: this.props.job.id }
  }

  remove() {
    let info = this.state
    axios.delete('http://iheartbaconapi.herokuapp.com/api/v1/jobs/' + this.state.id)
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
