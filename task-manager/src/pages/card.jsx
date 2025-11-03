import React from "react";
import styles from "../styles/card.module.css";
import Message from "../components/message.jsx";
import TaskManager from "../components/taskManager.jsx";
import { useTheme } from "../components/Theme.jsx";

function Card() {
  const { theme, makePink } = useTheme();

  // Define background color based on theme
  const backgroundColor =
    theme === "light"
      ? "#92ADA4"
      : theme === "dark"
      ? "#222222"
      : "pink";

  const textColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor,
        color: textColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <button
        onClick={makePink}
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#0e0101ff",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Light/Dark Mode
      </button>
      
      <Message text="Welcome!👋🏾 to Task Manager" />
      <h2>📄</h2>
      <br />
      <h3>Insert your tasks below!</h3>
      <br />

      <TaskManager />

      
    </div>
  );
}

export default Card;
