import React from "react";
import style from "./BasicSpring.module.css";
import { Square } from "../Blocks/Square/Square";

function BasicSquare(props) {
  return (
    <>
      <div className={style.container}>
        {props.numbers.map((item) => {
          return <Square time={item} />;
        })}
      </div>
      {props.children}
    </>
  );
}

export default BasicSquare;
