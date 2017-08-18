import React, {Component} from 'react';
import {Button, Well, Collapse} from 'react-bootstrap'

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
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.info.title}
        </Button>
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
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
