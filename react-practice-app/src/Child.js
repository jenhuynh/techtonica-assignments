import React from "react";

export default function Child({ childToParent, handleSubmit }) {
  const data = "This is data from Child Component to the Parent Component.";
  const submit = (event) => {
    console.log(`
      First Name: ${firstName}
      Email: ${email}
      Password: ${password}
      `);
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={submit}>
        <h1>Create Account</h1>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button primary onClick={() => childToParent(data)}>
          Click Child
        </button>
      </form>
    </>
  );
}
