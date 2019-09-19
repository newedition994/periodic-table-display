import React from "react";
import { MDBMask, MDBView } from "mdbreact";

const HoverOver = ({ element }) => (
  <MDBView hover zoom>
    <div className="ElementCard">
      <MDBMask overlay="black-light">
        <p>The atomic radius is {element.atomicRadius}</p>
        <p>The boiling point is {element.boilingPoint}</p>
        <p>The standard state is {element.standardState}</p>
        <p>It was discovered in {element.yearDiscovered}</p>
      </MDBMask>
    </div>
  </MDBView>
);

export default HoverOver;
