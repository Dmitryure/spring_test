import React, { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import style from "./Trail.module.css";

const config = { mass: 5, tension: 5000, friction: 300 };

export const Trail = (props) => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const trail = useTrail(data ? Object.keys(data).length : 5, {
    config,
    height: show ? 30 : 0,
    fontSize: show ? 10 : 0,
  });

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/9/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => {
        setShow(true);
      });
  }, [setData]);

  return (
    <>
      {data &&
        trail.map(({ ...rest }, index) => {
          return (
            <animated.div
              className={style.word}
              style={{ ...rest }}
              key={index}
            >
              {Object.values(data)[index]}
            </animated.div>
          );
        })}
      )}
    </>
  );
};
