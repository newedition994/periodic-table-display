import React from "react";

const Element = ({ element }) => (
  <div className="ElementCard">
    <h4>{element.atomicNumber}</h4>
    <h1>{element.symbol}</h1>
    <h3>{element.name}</h3>
  </div>
);

export default Element;
