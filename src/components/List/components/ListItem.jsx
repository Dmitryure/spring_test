import React from "react";
import { animated } from "react-spring";
import classNames from "./ListItem.module.css";

export const ListItem = ({ data, style, setItems, modifyList, key }) => {
  console.log(data);
  return (
    <animated.div
      className={classNames.container}
      key={key}
      onClick={() => modifyList(data.id, setItems)}
      style={style}
    >
      {data.value}
    </animated.div>
  );
};
