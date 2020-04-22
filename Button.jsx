import React from "react";
import styles from "./button.module.css";

export const Button = React.forwardRef((props, ref) => {
  return React.createElement("a", {
    ...props,
    ref,
    className: `${styles.button} ${props.className}`,
  });
});
