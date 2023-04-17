import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [store, setStore] = useState({
      productos: [],
      sortCritieria: [],
      searchTerms: "",
    });
  
    return (
      <AppContext.Provider value={{ store, setStore }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useStore = () => {
    return useContext(AppContext);
  };
  
  export default AppProvider;