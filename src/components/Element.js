import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Element extends Component {
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

    periodicTableContent = (
      <GridList col={9}>
        {elements.map(el => (
          <GridTile
            name={el.symbol}
            key={el.id}
            subtitle={<strong>{el.name}</strong>}
            actionIcon={
              <IconButton onMouseOver={() => this.handleOver(el.meltingPoint)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={el.symbol} alt="" />
          </GridTile>
        ))}
      </GridList>
    );

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onMouseOver={this.handleNotOver}
      />
    ];
    return (
      <div>
        {periodicTableContent}
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

export default Element;
