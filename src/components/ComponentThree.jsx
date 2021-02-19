import React from "react";
import { Card, Elevation, Colors } from "@blueprintjs/core";
import { useSpring, animated } from "react-spring";

const ComponentThree = ({ show }) => {
  const springProps = useSpring({
    opacity: show ? 1 : 0,
  });

  return (
    <animated.div style={springProps}>
      <Card
        interactive
        elevation={Elevation.ONE}
        style={{ backgroundColor: Colors.COBALT1, color: Colors.WHITE }}
      >
        <h3>Component Three</h3>
        <p>
          Opacity: <animated.span>{springProps.opacity}</animated.span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aut
          nihil, voluptatum deserunt sint libero quae quo magnam cum laudantium
          iure impedit ipsum sapiente laborum id. Totam voluptate maiores
          cupiditate?
        </p>
      </Card>
    </animated.div>
  );
};

export default ComponentThree;
