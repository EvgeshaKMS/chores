import React from "react";
import classes from "./Input.module.css";

const Input = ({taskError, ...props}) => {
  
  return (
    <div>
      <input
        className={classes.input}
        {...props}
      />
    </div>
  );
};

export default Input;
