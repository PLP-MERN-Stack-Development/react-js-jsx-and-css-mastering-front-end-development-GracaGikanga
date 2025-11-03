import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");


const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

// Theme changer
  const makePink = () => {
  setTheme((prevTheme) => (prevTheme === "pink" ? "light" : "pink"));
};


return (
    <ThemeContext.Provider value={{ theme, toggleTheme, makePink }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
  
}


