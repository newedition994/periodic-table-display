import React, { Component } from "react";
import axios from "axios";

import Element from "./Element";

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

  // showElementRadius = elements => {
  //   return this.state.elements.filter(element => element.yearDiscovered);
  // };

  hoverOver = ({ element }) => {
    // console.log(this.showElementRadius(element));
    // let elementInfo = this.state.elements;
    // alert(elementInfo);
    // switch (elementInfo) {
    //   case 0:
    //     elementInfo = element.atomicRadius;
    //     break;
    //   case 1:
    //     elementInfo = element.electronegativity;
    //     break;
    //   case 2:
    //     elementInfo = elementInfo.meltingPoint;
    //     break;
    //   case 3:
    //     elementInfo = element.bondingType;
    //     break;
    //   default:
    //     return element.name;
    // }
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
