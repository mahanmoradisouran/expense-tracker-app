import ExpenseTrackerApp from "./ExpenseTrackerApp/ExpenseTrackerApp";
import GetNameScreen from "./GetNameScreen/GetNameScreen";
import "./App.css";

const App = () => {
  return (
    <div className="w-full h-screen">
      {localStorage.getItem("name") ? (
        <ExpenseTrackerApp />
      ) : (
        <GetNameScreen />
      )}
    </div>
  );
};

export default App;
