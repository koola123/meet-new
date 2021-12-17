import React, { Component } from 'react'
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
  state = {
    showEvent: 32,
    errorText: ""
  }

  handleInputChanged = (e) => {
    const value = e.target.value
    if (value < 1) {
     return this.setState({
       showEvent: value,
       errorText: "Type a number between 1 and 32",
     })
   } else if (value > 32) {
       return this.setState({
         errorText: "Type a number between 1 and 32",
         showEvent: value,
       })
   } else {
     this.setState({
       showEvent: value,
       errorText: ""
     })
     this.props.updateNumberOfEvents(event.target.value);
   }
  }

  render() {
    return (
    <div className="NumberOfEvents">
      <p>Number of Events:</p>
      <input
      className="numberOfEvents"
      type="text"
      value={this.state.showEvent}
      onChange={(e) => this.handleInputChanged(e)}
      />
      <ErrorAlert text={this.state.errorText} />
    </div>
    )
  }
}

export default NumberOfEvents
