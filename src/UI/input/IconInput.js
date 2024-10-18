import React from "react";
import classes from "./IconInput.module.css";
import { Icon } from "./Icon";

export const IconInput = React.forwardRef((props, ref) => {
  return (
    <>
      {/* // <div className={classes.iconDiv} {...props}> */}
      <input ref={ref} className={classes.iconInput} {...props} />
      {props.condition ? (
        <Icon name="trueAnswer" color="green" size="2.5rem" />
      ) : (
        <Icon name="falseAnswer" color="red" size="2.5rem" />
      )}
      {/* // </div> */}
    </>
  );
});
