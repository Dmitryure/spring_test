import React from "react";
import { Link } from "react-router-dom";
import style from "./BasicSpring.module.css";
import { Square } from "../Blocks/Square/Square";

const ids = [0, 1, 2, 3];

function BasicSquare() {
  return (
    <>
      <div className={style.container}>
        {ids.map((item) => {
          return <Square time={item} />;
        })}
      </div>
      <Link to={"/spring-2"}>next</Link>
    </>
  );
}

export default BasicSquare;
