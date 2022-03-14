import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
