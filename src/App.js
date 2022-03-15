
/* eslint-disable react/jsx-no-constructed-context-values */
import "./index.css";
import { useState } from "react";
import ThemeContext from "./contexts/Theme";
import Message from "./components/Message";
import Header from './components/Header';


// const express = require("express");

// const { Server } = require("socket.io");

// const http = require("http");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [theme, setTheme] = useState("light");
  return (

    
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App__${theme}`}>
        <Header />
        <ToggleTheme />
        <Message />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
