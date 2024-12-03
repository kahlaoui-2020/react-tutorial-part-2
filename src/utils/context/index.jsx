import { createContext, useState } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const SurveyContext = createContext();
export function SurveyProvider({ children }) {
  const [answers, setAnswers] = useState({});
  function saveAnswers(newAnswers) {
    setAnswers({ ...answers, ...newAnswers });
  }
  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
}
