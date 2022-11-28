import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import classes from "./Input.module.css";

const TimeInput = ({timeError, ...props}) => {
  let mask = "12:34";
  let formatChars = {
    1: "[0-2]",
    2: "[0-9]",
    3: "[0-5]",
    4: "[0-9]",
  };

  let beforeMaskedValueChange = (newState) => {
    let { value } = newState;

    if (value.startsWith("2")) {
      formatChars["2"] = "[0-3]";
    } else {
      formatChars["2"] = "[0-9]";
    }
    return { value, selection: newState.selection };
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <ReactInputMask
        className={classes.input}
        mask={mask}
        formatChars={formatChars}
        beforeMaskedValueChange={beforeMaskedValueChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}  
        {...props}
      />
      <span className={classes.error}>{timeError}</span>
    </div>
  );
};

export default TimeInput;
