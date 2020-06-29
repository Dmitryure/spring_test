import React, { useState } from "react";
import { ListItem } from "./components/ListItem";
import style from "./List.module.css";

export const List = (props) => {
  const [items, setItems] = useState(["hello", "privet", "vasya"]);
  return (
    <>
      <div className={style.container}>
        {items.map((item) => {
          return <ListItem data={item} />;
        })}
      </div>
      {props.children}
    </>
  );
};
