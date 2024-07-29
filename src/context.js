import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <AppContext.Provider value={{ sidebar, showSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
