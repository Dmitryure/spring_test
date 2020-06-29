import React from "react";
import style from "./MultipleSprings.module.css";
import { useSprings, animated } from "react-spring";

// too hard for now
export const MultipleSprings = (props) => {
  const { numbers } = props;
  const [springs, set] = useSprings(numbers.length, (i) => {
    let x;
    let y;
    if (i % 2 === 0) {
      console.log(i);
      x = i * 100;
      y = i * 100;
    } else {
      x = -i * 100 - (i - 1) * 100;
      y = i * 100 - (i - 1) * 100;
    }
    return { top: y, left: x, position: "absolute" };
  });

  console.log(springs);

  return (
    <>
      <div className={style.container}>
        <div className={style.boxesContainer}>
          {numbers &&
            numbers.map((item, i) => (
              <animated.div
                style={{ ...springs[i] }}
                onClick={() =>
                  set(() => ({ maxHeight: 0, fontSize: 60, maxWidth: 0 }))
                }
                className={style.box}
                key={item}
              >
                {item}
              </animated.div>
            ))}
        </div>
      </div>
      {props.children}
    </>
  );
};
