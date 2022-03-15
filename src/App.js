import "./index.css";
import Message from "./components/Message";

// const express = require("express");

// const { Server } = require("socket.io");

// const http = require("http");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

function App() {
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
