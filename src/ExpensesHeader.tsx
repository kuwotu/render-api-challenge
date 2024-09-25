import styles from "./styles.module.css";

function ExpensesHeader() {
  return (
    <div id="template-text">
      <div className={styles["expenses-header"]}>
        <h2 className={styles["item"]}>Date</h2>
        <h2 className={styles["item"]}>Merchant</h2>
        <h2 className={styles["item"]}>Amount</h2>
        <h2 className={styles["item"]}>Category</h2>
        <h2 className={styles["item"]}>Description</h2>
        <h2 className={styles["item"]}>Status</h2>
      </div>
    </div>
  );
}

export default ExpensesHeader;
