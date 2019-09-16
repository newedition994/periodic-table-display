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

  hoverOver = element => {
    // console.log("this is hovering over");
    var elementInfo = element.atomicMass;

    switch (elementInfo) {
      case 0:
        elementInfo = element.radius;
        break;
      case 1:
        elementInfo = element.electronegativity;
        break;
      case 2:
        elementInfo = elementInfo.meltingPoint;
        break;
      case 3:
        elementInfo = element.bondingType;
        break;
      default:
        console.log("This is some element info " + element);
    }
  };

  render() {
    const filteredElements = this.showElementInfo();

    return (
      <div className="ElementContainer" onMouseMove={this.hoverOver}>
        {filteredElements.map(element => (
          <Element key={element.atomicNumber} element={element} />
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
