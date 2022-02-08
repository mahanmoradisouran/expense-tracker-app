import { useState , useContext } from "react";
import BottomNav from "../BottomNav/BottomNav";
import { Provider } from "../ContentProvider/ConetntProvider";


const ExpenseTrackerApp = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  
  const Content = useContext(Provider);
  
  return (
    <Content>
      <div className="w-full h-full">
        <BottomNav />
      </div>
    </Content>
  );
};

export default ExpenseTrackerApp;
