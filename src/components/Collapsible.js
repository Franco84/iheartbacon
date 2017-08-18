import React, {Component} from 'react';
import {Button, Well, Collapse} from 'react-bootstrap'
import Editmodal from './Editmodal'
import Deletebutton from './Deletebutton'

class Collapsible extends Component {
  constructor(...args) {
    super(...args);

    this.state = { open: false};
  }

  experience() {
    if(this.props.info.experience === 0) {
      return "Entry"
    } else if (this.props.info.experience === 1) {
      return "Mid"
    } else {
      return "Senior"
    }
  }

  worktype() {
    if(this.props.info.worktype === 0) {
      return "Full-Time"
    } else if (this.props.info.worktype === 1) {
      return "Part-Time"
    } else {
      return "Contract"
    }
  }

  travel() {
    if (this.props.info.travel === true) {
      return (<p>This position requires travel at least 10% of the time</p>)
    }
  }

  render() {
    return (
      <div>
        <br />
        <p className="white pointer" onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.info.title}
        </p>
        <Collapse className="tiny-padding-top" in={this.state.open}>
          <div>
            <Well>
              Experience Level:
              <p>{this.experience()}</p>

              Description:
              <p>{this.props.info.description}</p>

              Employment Type:
              <p>{this.worktype()}</p>

              {this.travel()}

              Contact:
              <p><a href={"mailto:" + this.props.info.email}>{this.props.info.email}</a></p>

              <Editmodal callback={this.props.callback} job={this.props.info} />
              <br />
              <Deletebutton callback={this.props.callback} job={this.props.info} />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
