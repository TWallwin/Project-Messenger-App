// import React from "react";
import { useState } from "react";

export default function ChangeDetails() {
  const [userDetails, setUserDetails] = useState({ username: "", avatar: "" });

  function handleChange({ e: { target } }) {
    const value = target.value;

    setUserDetails({
      ...userDetails,
      [target.name]: value,
    });
  }

  //   function handleSubmit(e) {
  //     setUserDetails({ username: event.value.target });
  //   }

  return (
    <section>
      <form action="/action_page.php" onChange={handleChange}>
        <label htmlFor="username" id="test">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value="userDetails.username"
          />
        </label>
        <label htmlFor="avatar-url">
          Avatar URL:
          <input
            type="text"
            id="avatar-url"
            name="avatar-url"
            value="userDetails.avatar"
          />
        </label>
      </form>
      <button type="submit" onSubmit={handleSubmit}>
        Update Details
      </button>
    </section>
  );
}
