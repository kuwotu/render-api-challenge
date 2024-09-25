import styles from "./styles.module.css";

function Header() {
  return (
    <div id="template-text">
      <h1 className={styles["expenses-title"]}>Expenses</h1>
      <div className={styles.seperator}></div>
    </div>
  );
}

export default Header;
