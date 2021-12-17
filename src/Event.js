import React, { Component } from "react";

class Event extends Component {

  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let { events }  = this.props

    return (
      <div className="Event">
        <ul>

          {this.state.show === true && (
            <p className="EventDetails">{events.description}</p>
          )}
          {this.state.show === false && (
            <button className="showMore" onClick={() => this.handleButton()}>
              Show details
            </button>
          )}
          {this.state.show === true && (
            <button className="showLess" onClick={() => this.handleButton()}>
              hide details
            </button>
          )}

        </ul>
      </div>
    );
  }
}
export default Event;
