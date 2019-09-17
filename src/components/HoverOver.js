import React from "react";

const HoverOver = ({ element }) => (
  <div className="ElementCard">
    <p>The atomic radius is {element.atomicRadius}</p>
    <p>The boiling point is {element.boilingPoint}</p>
    <p>The standard state is {element.standardState}</p>
    <p>It was discovered in {element.yearDiscovered}</p>
  </div>
);

export default HoverOver;
