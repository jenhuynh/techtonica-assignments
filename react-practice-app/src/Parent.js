import React, { useState } from "react";
import Child from "./Child.js";

function Parent() {
  const [data, setData] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const childToParent = (childdata) => {
    setData(childdata);
  };

  return (
    <>
      {data}
      <div>
        <Child childToParent={childToParent} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default Parent;
