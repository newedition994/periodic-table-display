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
    // ref.current.addEventListener does not work need a new function
    var current = ref.current;
    current.addEventListener("mouseenter", enter);
    current.addEventListener("mouseleave", leave);
    return () => {
      current.removeEventListener("mouseenter", enter);
      current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}

// The following is to help with ref.current errors
// look into https://stackoverflow.com/questions/39310754/react-addeventlistener-is-not-a-function-error

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
