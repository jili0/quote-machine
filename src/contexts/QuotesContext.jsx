import { createContext, useState } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = ({ children }) => {
  const initialQuotes =
    (localStorage.getItem("quotes") &&
      JSON.parse(localStorage.getItem("quotes"))) ||
    [];
  const [quotes, setQuotes] = useState(initialQuotes);
  return (
    <QuotesContext.Provider value={{ quotes, setQuotes }}>
      {children}
    </QuotesContext.Provider>
  );
};
