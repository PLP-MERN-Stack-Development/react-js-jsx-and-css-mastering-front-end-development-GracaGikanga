import React from "react";
import styles from "../styles/button.module.css"; // import CSS module styles

function Button({ variant, children }) {
  // Determine the CSS class to apply based on the variant prop
  const className = `${styles.btn} ${styles[variant]}`;
  return <button className={className}>{children}</button>;
}

export default Button;
