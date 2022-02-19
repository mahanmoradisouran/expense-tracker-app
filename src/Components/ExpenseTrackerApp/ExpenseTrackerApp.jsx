import { useContext, useState } from "react";
import { Content } from "../ContentProvider/ConetntProvider";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Income from "../Income/Income";
import Expense from "../Expense/Expense";
import Transactions from "../Transactions/Transactions";
import Budget from "../Budget/Budget";
import BottomNav from "../BottomNav/BottomNav";
import Add from "../Add/Add";

const ExpenseTrackerApp = () => {

  // const [trades, setTrades] = useState([]);
  const [income , setIncome] = useState(1000);
  const [expense , setExpense] = useState(400);
  const [notification, setNotification] = useState(["wqeweqweqweqweq"])

  const ShowContent = () => {
    const content = useContext(Content);
    switch (content.state) {
      case "Home":
        return <Home incoms={{income , setIncome}} expenses={{expense , setExpense}} notifications={{notification , setNotification}}/>;
      case "Transactions":
        return <Transactions />;
      // Add pages =>
      case "Add":
        return <Add />
      case "Expense":
        return <Expense />;
      case "Income":
        return <Income />;
      // Add pages <=
      case "Budget":
        return <Budget />;
      case "Profile":
        return <Profile />;
      default:
        break;
    }
  };

  return <div className="w-full h-full">
    {ShowContent()}
    <BottomNav />
  </div>;
};

export default ExpenseTrackerApp;
