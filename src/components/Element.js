import React, { useRef, useEffect, useState } from "react";
//import HoverOver from "./HoverOver";

// React Hooks only work in functional components
function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
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

function Element({ element }) {
  const [ref, hovered] = useHover();

  // function renderSwitch(element) {
  //   switch(element) {
  //     case 0:
  //       return <p>The atomic radius is <strong>{element.atomicRadius}</strong></p>
  //     case 1:
  //       return <p>The boiling point is <strong>{element.boilingPoint}</strong></p>
  //     case 2:
  //       return <p>The standard state is <strong>{element.standardState}</strong></p>
  //     case 3:
  //       return <p>It was discovered in <strong>{element.yearDiscovered}</strong></p>
  //     default:
  //       return element.name;
  //   }
  // }

  return (
    <div className="ElementCard" ref={ref}>
      <h4>{element.atomicNumber}</h4>
      <h1>{element.symbol}</h1>
      <h3>{element.name}</h3>
      {hovered && (
        <div>
          <p>
            The atomic radius is <strong>{element.atomicRadius}</strong>
          </p>
          <p>
            The boiling point is <strong>{element.boilingPoint}</strong>
          </p>
          <p>
            The standard state is <strong>{element.standardState}</strong>
          </p>
          <p>
            It was discovered in <strong>{element.yearDiscovered}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Element;
