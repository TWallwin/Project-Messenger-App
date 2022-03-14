import { useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setMessages(e.target.value);
    console.log(messages);
  };

  socket.on("chat message", function (msg) {
    var item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <section>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Message;
