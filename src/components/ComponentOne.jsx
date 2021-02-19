import React, { useEffect } from "react";
import { Card, Elevation, Colors, Tag } from "@blueprintjs/core";
import { useSpring, useSprings, animated } from "react-spring";

const ComponentOne = () => {
  const springProps = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });

  // Delay after component mount
  const [springs, set] = useSprings(1, () => ({ value: 0 }));
  useEffect(() => {
    set({ value: 100, delay: 1750, duration: 5000 });
  }, [set]);

  return (
    <animated.div style={springProps}>
      <Card
        interactive
        elevation={Elevation.ONE}
        style={{ backgroundColor: Colors.COBALT3, color: Colors.WHITE }}
      >
        <h3>Component One</h3>
        <Tag intent={"none"} large>
          <animated.span>
            {springs[0].value.interpolate((value) => value.toFixed())}
          </animated.span>
          %
        </Tag>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          aperiam, maxime, quo soluta optio tempora quae possimus beatae numquam
          impedit et, distinctio quia. Magni at repudiandae autem distinctio
          omnis quaerat.
        </p>
      </Card>
    </animated.div>
  );
};

export default ComponentOne;
