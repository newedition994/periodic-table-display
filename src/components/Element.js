import React, { useRef, useEffect, useState } from "react";
import HoverOver from "./HoverOver";

// Tried to use React Hooks to get the hover to work
// React Hooks only work in functional components
function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventLister("mouseenter", enter);
    ref.current.addEventLister("mouseleave", leave);
    return () => {
      ref.current.removeEventLister("mouseenter", enter);
      ref.current.removeEventLister("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}

function Element({ element }) {
  const [ref, hovered] = useHover();

  return (
    <div className="ElementCard" ref={ref}>
      <h4>{element.atomicNumber}</h4>
      <h1>{element.symbol}</h1>
      <h3>{element.name}</h3>
      {hovered && <HoverOver />}
    </div>
  );
}

export default Element;
