import { useContext, useState, createContext, useEffect } from "react";
import { Content } from "../ContentProvider/ConetntProvider";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Income from "../Income/Income";
import Expense from "../Expense/Expense";
import Transactions from "../Transactions/Transactions";
import Budget from "../Budget/Budget";
import BottomNav from "../BottomNav/BottomNav";
import Add from "../Add/Add";

export const Trades = createContext();

const ExpenseTrackerApp = () => {
  const [trades, setTrades] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [notification, setNotification] = useState([]);
  const [tradeTypes] = useState([
    "restaurant",
    "taxation",
    "car",
    "recurringbill",
    "shoppingbag",
  ]);

  const ShowContent = () => {
    const content = useContext(Content);
    switch (content.state) {
      case "Home":
        return (
          <Home
            trades={{ trades, setTrades }}
            incoms={{ income, setIncome }}
            expenses={{ expense, setExpense }}
            notifications={{ notification, setNotification }}
          />
        );
      case "Transactions":
        return <Transactions />;
      // Add pages ==>
      case "Add":
        return <Add />;
      case "Expense":
        return <Expense />;
      case "Income":
        return <Income />;
      // Add pages <==
      case "Budget":
        return <Budget />;
      case "Profile":
        return <Profile />;
      default:
        break;
    }
  };

  useEffect(() => {
    const inc = trades.filter((t) => t.transaction > 0);
    const exp = trades.filter((t) => t.transaction < 0);
    setIncome(inc.map((i) => i.transaction).reduce((a, b) => a + b, 0));
    setExpense(exp.map((i) => i.transaction).reduce((a, b) => a + b, 0));
  }, [trades, income, expense]);

  return (
    <div className="w-full h-full">
      {/* Trades , incomes and expenses provider ! */}
      <Trades.Provider
        value={{
          trade: { trades, setTrades },
          incoms: { income, setIncome },
          expenses: { expense, setExpense },
          tradeTypes,
          notifications: { notification, setNotification },
        }}
      >
        {ShowContent()}
        <BottomNav />
      </Trades.Provider>
    </div>
  );
};

export default ExpenseTrackerApp;
