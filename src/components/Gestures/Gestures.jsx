import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Gestures.module.css";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const xGrabber = (x) => (index) => {
  console.log(x, index);
  return { left: index * 100 + x, position: "absolute" };
};

export const Gestures = (props) => {
  const { numbers } = props;
  const order = useRef(numbers.map((_, index) => index));
  const [springs, setSprings] = useSprings(numbers.length, xGrabber(1));

  const bind = useDrag(({ movement: [x, y] }) => {
    setSprings(xGrabber(x));
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.navContainer}>
          <Link to={"/spring-2"}>Previous</Link>
          <Link to={"/"}>Next</Link>
        </div>
        <div className={style.boxesContainer}>
          {numbers.map((item, i) => {
            console.log({ ...bind() });
            return (
              <animated.div
                {...bind()}
                style={springs[i]}
                className={style.box}
              >
                {item}
              </animated.div>
            );
          })}
        </div>
      </div>
    </>
  );
};
