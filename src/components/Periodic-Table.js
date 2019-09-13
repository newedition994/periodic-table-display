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
        this.setState({
          elements: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Elements</h1>
        <Element />
      </div>
    );
  }
}

export default PeriodicTable;
