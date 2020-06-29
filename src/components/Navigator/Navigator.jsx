import React from "react";
import style from "./Navigator.module.css";
import { Link } from "react-router-dom";

export const Navigator = (props) => {
  return (
    <div className={style.container}>
      <Link to={`/${props.previous}`}>Previous</Link>
      <Link to={`/${props.next}`}>Next</Link>
    </div>
  );
};
