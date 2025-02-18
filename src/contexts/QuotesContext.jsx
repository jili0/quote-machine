import { createContext, useState } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = ({ children }) => {
  const initialQuotes = (() => {
    try {
      const storedQuotes = localStorage.getItem("quotes");
      return storedQuotes ? JSON.parse(storedQuotes) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  })();
  
  const [quotes, setQuotes] = useState(initialQuotes);
  return (
    <QuotesContext.Provider value={{ quotes, setQuotes }}>
      {children}
    </QuotesContext.Provider>
  );
};
