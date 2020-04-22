import react from "react";
import styles from "./button.module.css";

export function Button(props) {
  props.className = `${styles.button} ${props.className}`;

  return React.createElement("button", props);
}
