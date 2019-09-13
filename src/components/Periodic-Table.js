import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

export default class PeriodicTable extends Component {
  state = {
    mouseover: false,
    currentEl: ""
  };

  handleOver = el => {
    this.setState({ mouseover: true, currentEl: el });
  };

  handleNotOver = el => {
    this.setState({ mouseover: false });
  };

  render() {
    let periodicTableContent;
    const { elements } = this.props;

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          mouseover={this.state.mouseover}
          onMouseOver={this.handleNotOver}
        ></Dialog>
      </div>
    );
  }
}
