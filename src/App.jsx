import "./App.scss";
import {QuotesContextProvider} from "./contexts/QuotesContext.jsx";
import QuoteBox from "./components/QuoteBox.jsx";

const App = () => {
  return (
    <QuotesContextProvider>
      <QuoteBox />
    </QuotesContextProvider>
  );
};

export default App;
