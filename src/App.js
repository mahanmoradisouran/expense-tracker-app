import GetNameScreen from "./Components/GetNameScreen/GetNameScreen";
import "./App.css";
import ExpenseTrackerApp from "./Components/ExpenseTrackerApp/ExpenseTrackerApp";
const App = () => {
  return (
      <div className="w-full h-screen relative bg-Light-100">
        {localStorage.getItem("name") ? (
          <ExpenseTrackerApp />
        ) : (
          <GetNameScreen />
        )}
      </div>
  );
};

export default App;