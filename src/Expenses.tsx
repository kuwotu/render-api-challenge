import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Expenses() {
  interface ExpensesType {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: string;
    category: string;
    status: string;
  }

  const [expensesData, setExpensesData] = useState<ExpensesType[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://expenses-backend-mu.vercel.app/expenses";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Username: "kevwe.uwotu",
          },
        });
        const expenses = (await response.json()) as ExpensesType[];
        setExpensesData(expenses);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Unexpected error, please refresh to try again.</div>;
  }

  return (
    <div id="template-text">
      {expensesData.map((post) => {
        const dateStr = post.date;
        const date = new Date(dateStr);

        const options = { month: "long", day: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);

        const capitaliseFirstLetter = (string: string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        const postStatus = capitaliseFirstLetter(post.status);
        const postCategory = capitaliseFirstLetter(post.category);

        return (
          <ul className={styles["expenses-list"]} key={post.id}>
            <li className={styles.item}>{formattedDate}</li>
            <li className={styles.item}>{post.merchant}</li>
            <li className={styles.item}>{"£" + post.amount}</li>
            <li className={styles.item}>{postCategory}</li>
            <li className={styles.item}>{post.description}</li>
            <li className={styles.item}>{postStatus}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Expenses;
