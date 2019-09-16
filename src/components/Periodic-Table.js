import React, { Component } from "react";
import axios from "axios";

import Element from "./Element";

class PeriodicTable extends Component {
  state = {
    elements: []
  };

  hoverOver = () => {
    const width = this.refs.ElementContainer.clientWidth;
    const height = this.refs.ElementContainer.clientHeight;
    console.log("New width: " + width + " and the height: " + height);
  };

  componentDidMount = () => {
    axios
      .get(`https://neelpatel05.pythonanywhere.com/`)
      .then(res => {
        this.setState({
          elements: res.data
        });
      })
      .catch(err => console.log(err));
  };

  showElementInfo = elements => {
    return this.state.elements.filter(element => element.name.toUpperCase());
  };

  hoverOver = () => {
    const width = this.refs.ElementContainer.clientWidth;
    const height = this.refs.ElementContainer.clientHeight;
    console.log(width, height);
  };

  render() {
    const filteredElements = this.showElementInfo();

    return (
      <div className="ElementContainer">
        {filteredElements.map(element => (
          <Element
            key={element.atomicNumber}
            element={element}
            onMouseMove={this.hoverOver}
          />
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
