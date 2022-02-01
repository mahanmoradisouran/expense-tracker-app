import styles from "../GetNameScreen/GetNameScreen.module.css";
import { useState } from "react";

const ExpenseTrackerApp = () => {
  const name = localStorage.getItem("name");

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(income - expense);

  return (
    <div className="w-full h-full bg-slate-50">
      <div className="w-11/12 py-3 mx-auto">
        <section className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-14 h-14 bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-slate-300 pb-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-2">
            <h3 className="text-slate-500 text-xs">Welcome</h3>
            <h2 className="text-slate-600 text-md font-semibold">{name}</h2>
          </div>
        </section>
        <section className="relative mt-5">
          <div
            className={`${styles.bankCard} w-full py-6 rounded-3xl flex flex-col items-center`}
          >
            <h1 className="text-white md:text-lg text-base">Total balance</h1>
            <p
              className={`text-white md:text-6xl text-4xl text-center font-semibold md:mt-5 mt-1 ${styles.totalBalance}`}
            >
              {balance}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;
