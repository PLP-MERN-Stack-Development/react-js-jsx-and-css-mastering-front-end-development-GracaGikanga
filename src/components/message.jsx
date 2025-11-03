import styles from "../styles/message.module.css"

function Message({ text }) {
  return <h2 className={styles.message}>{text}</h2>;
}

export default Message;
