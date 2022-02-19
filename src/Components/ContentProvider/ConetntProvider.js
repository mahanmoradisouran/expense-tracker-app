import { createContext, useReducer } from "react";

export const Content = createContext();

const initialState = "Home";

const reducer = (state, action) => {
  switch (action) {
    case "Home":
      return "Home";
    case "Transactions":
      return "Transactions";
    // Add pages =>>
    case "Add":
      return "Add";
    case "Income":
      return "Income";
    case "Expense":
      return "Expense";
    // Add pages =>>
    case "Budget":
      return "Budget";
    case "Profile":
      return "Profile";
    default:
      return state;
  }
};

const ContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Content.Provider value={{ state, dispatch }}>{children}</Content.Provider>
  );
};

export default ContentProvider;
