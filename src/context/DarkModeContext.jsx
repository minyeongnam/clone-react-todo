import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.getElementById("root").classList.add("dark");
  } else {
    document.getElementById("root").classList.remove("dark");
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
