import GetNameScreen from "./Components/GetNameScreen/GetNameScreen";
import "./App.css";
import ExpenseTrackerApp from "./Components/ExpenseTrackerApp/ExpenseTrackerApp";
import ContentProvider from "./Components/ContentProvider/ConetntProvider";
const App = () => {
  return (
    <ContentProvider>
      <div className="w-full h-screen relative bg-Light-100 font-sans">
        {localStorage.getItem("name") && localStorage.getItem("bankInformation") ? (
          <ExpenseTrackerApp />
        ) : (
          <GetNameScreen />
        )}
      </div>
    </ContentProvider>
  );
};

export default App;
