// import { useState } from "react";

function Message() {
  // const [messages, setMessages] = useState([]);
  // const [form, setForm] = useState();

  const handleChange = () => {
    // setMessages(e.target.value);
  };

  // socket.on("chat message", function (msg) {
  //   var item = document.createElement("li");
  //   item.textContent = msg;
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });

  return (
    <section>
      <ul id="messages" />
      <form id="form" action="">
        <input id="input" autoComplete="off" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Message;
