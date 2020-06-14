import React from "react";
import style from "./Square.module.css";
import { useSpring, animated } from "react-spring";

export const Square = (props) => {
  const fadeInSpring = useSpring({
    config: { duration: 1600, mass: 100, tension: 5000, friction: 5 },
    to: { opacity: 1, maxHeight: 150, borderBottomLeftRadius: 300 },
    from: { opacity: 0, maxHeight: 0, borderBottomLeftRadius: 0 },
    delay: props.time * 1000,
  });
  return (
    <animated.div style={fadeInSpring} className={style.square}/>
  );
};
