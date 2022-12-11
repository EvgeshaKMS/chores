import React from "react";
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


  return (
    <div>
      <ReactInputMask
        className={classes.input}
        mask={mask}
        formatChars={formatChars}
        beforeMaskedValueChange={beforeMaskedValueChange}
        {...props}
      />
    </div>
  );
};

export default TimeInput;
