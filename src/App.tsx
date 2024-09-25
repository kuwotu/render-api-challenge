import Expenses from "./Expenses";
import ExpensesHeader from "./ExpensesHeader";
import Header from "./Header";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ExpensesHeader />
      <Expenses />
    </div>
  );
}

export default App;
