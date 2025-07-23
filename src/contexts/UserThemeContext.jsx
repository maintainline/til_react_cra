import { createContext, useState } from "react";

export const UserThemeContext = createContext();
export const UserThemeProvider = ({ children }) => {
  const [bg, setBg] = useState("#ffffff");
  return (
    <UserThemeContext.Provider value={{ bg, setBg }}>
      {children}
    </UserThemeContext.Provider>
  );
};
