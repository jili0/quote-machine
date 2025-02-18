import { createContext, useState } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(
    JSON.parse(localStorage.getItem("quotes")) || []
  );
  return (
    <QuotesContext.Provider value={{ quotes, setQuotes }}>
      {children}
    </QuotesContext.Provider>
  );
};
