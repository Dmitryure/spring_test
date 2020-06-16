import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/spring-2"}>next</Link>
    </>
  );
}

export default BasicSquare;
