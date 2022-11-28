import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = ({taskError, ...props}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <input
        className={classes.input}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        {...props}
      />
      <span className={classes.error}>{taskError}</span>
    </div>
  );
};

export default Input;
