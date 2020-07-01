import React, { useState, useCallback } from "react";
import { ListItem } from "./components/ListItem";
import style from "./List.module.css";
import { v4 } from "uuid";
import { useTransition } from "react-spring";

const modifyList = (id, set) => {
  set(items => [...items.filter(el => el.id !== id)]);
};

export const List = props => {
  const [items, setItems] = useState([
    { value: "hello", id: v4() },
    { value: "privet", id: v4() },
    { value: "vasya", id: v4() }
  ]);
  const transitions = useTransition(items, item => item.id, {
    from: { maxHeight: 0, transform: "translate3d(0px, 50px, 0px)", opacity: 0 },
    enter: { maxHeight: 30, transform: "translate3d(0px, 0px, 0px)", opacity: 1 },
    leave: { maxHeight: 0, transform: "translate3d(-50px, 0px, 0px)", opacity: 0 }
  });

  return (
    <>
      <button
        onClick={() => setItems(items => [...items, { value: v4(), id: v4() }])}
      >
        add item
      </button>
      <button
        onClick={event =>
          setItems(items => [...items.filter(el => el === event.target.value)])
        }
      ></button>
      <div className={style.container}>
        {transitions.map(({ item, props, key }) => {
          return (
            <ListItem
              setItems={setItems}
              modifyList={modifyList}
              key={key}
              style={props}
              data={item}
            />
          );
        })}
      </div>
      {props.children}
    </>
  );
};
