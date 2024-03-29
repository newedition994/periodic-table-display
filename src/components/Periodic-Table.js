import React, { Component } from "react";

import axios from "axios";

import Element from "./Element";
//import HoverOver from "./HoverOver";

class PeriodicTable extends Component {
  state = {
    elements: []
  };

  componentDidMount = () => {
    axios
      .get(`https://neelpatel05.pythonanywhere.com/`)
      .then(res => {
        //console.log(res.data);
        this.setState({
          elements: res.data
        });
      })
      .catch(err => console.log(err));
  };

  showElementInfo = elements => {
    return this.state.elements.filter(element => element.name.toUpperCase());
  };

  render() {
    const filteredElements = this.showElementInfo();

    return (
      <div className="ElementContainer" onMouseMove={this.hoverOver}>
        <p>
          The api used for element info is from:
          https://neelpatel05.pythonanywhere.com/
        </p>
        {filteredElements.map(element => (
          <Element key={element.atomicNumber} element={element} />
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
