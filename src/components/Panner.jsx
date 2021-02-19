import React from "react";
import { Card, Classes } from "@blueprintjs/core";
import { animated, useSpring } from "react-spring";
import styles from "./Panner.module.scss";

const Panner = () => {
  const [pannerProps, setPannerProps] = useSpring(() => ({ x: 0, y: 0 }));

  return (
    <Card className={styles.Panner}>
      <Card interactive className={`${styles.Square} ${Classes.CALLOUT} `}>
        <animated.div
          className={styles.Picture}
          onMouseMove={(e) => {
            const { clientX, clientY } = e;
            const { left, top } = e.target.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;

            setPannerProps({ x, y });
          }}
          style={{
            backgroundPositionX: pannerProps.x.interpolate((x) => `${x / 2}%`),
            backgroundPositionY: pannerProps.y.interpolate((y) => `${y / 2}%`),
          }}
        />
      </Card>
    </Card>
  );
};

export default Panner;
