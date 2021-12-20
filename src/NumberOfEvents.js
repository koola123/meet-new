import React, { Component } from 'react'

class NumberOfEvents extends Component {
  state = {
    showEvent: 32,
    errorText: ""
  }

  handleInputChanged = (e) => {
    const value = e.target.value
     this.setState({
       showEvent: value,
       errorText: ""
     })
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
    </div>
    )
  }
}

export default NumberOfEvents
