/* eslint-disable react/jsx-no-constructed-context-values */
import "./index.css";
import { useState } from "react";
import ThemeContext from "./contexts/Theme";
import Message from "./components/Message";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App__${theme}`}>
        <ToggleTheme />
        <Message />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
