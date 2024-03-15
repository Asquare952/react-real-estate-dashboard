import React from "react";
import { Link } from "react-router-dom";
import Style from "./button.module.css"
export const Button = ({ text, url ,}) => {
  return (
    <>
      <Link to={url}>
        <button className={Style.btn}>{text}</button>
      </Link>
    </>
  );
  
};
