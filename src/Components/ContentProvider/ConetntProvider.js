import { useState , createContext} from "react";

export const Provider = createContext();

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("Home");


  return (
    <Provider.Provider value={(content, setContent)}>
      {children}
    </Provider.Provider>
  );
};

export default ContentProvider;
