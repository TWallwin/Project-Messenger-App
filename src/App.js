import "./index.css";
import Message from "./components/Message";

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

function App() {
  return (
    <div className='App'>
      <Message />
    </div>
  );
}

export default App;
