import React, { useEffect } from "react";
import { Card, Elevation, Colors, Button } from "@blueprintjs/core";
import { useSpring, useSprings, animated } from "react-spring";

const ComponentTwo = ({ onToggleCard3 }) => {
  const [springs, set] = useSprings(1, () => ({ opacity: 0, marginTop: -500 }));
  useEffect(() => {
    set({
      opacity: 1,
      marginTop: 0,
      config: { delay: 750, duration: 2000 },
    });
  }, [set]);
  // const springProps = useSpring({
  //   from: { opacity: 0, marginTop: -500 },
  //   to: { opacity: 1, marginTop: 0 },
  //   delay: 250,
  //   duration: 1000,
  // });

  return (
    <animated.div style={springs[0]}>
      <Card
        interactive
        elevation={Elevation.ONE}
        style={{ backgroundColor: Colors.COBALT2, color: Colors.WHITE }}
      >
        <h3>Component Two</h3>
        <p>
          Opacity: <animated.span>{springs[0].opacity}</animated.span>
          Margin Top: <animated.span>{springs[0].marginTop}</animated.span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illum
          culpa. Ipsam praesentium voluptas voluptatum voluptatibus numquam
          perferendis provident dicta sint, laudantium a tempore! Fugiat
          distinctio aperiam qui ratione natus.
        </p>
        <Button onClick={onToggleCard3}>Toggle Component 3</Button>
      </Card>
    </animated.div>
  );
};

export default ComponentTwo;
