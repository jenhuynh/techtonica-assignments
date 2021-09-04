import React, { useState } from "react";

//passing props in child
export default function Child(props) {
  return (
    <div className="child">
      <h1>Child</h1>
      {/* adding function onclick of the button to change word of parent component, calling function to change the word when user clicks on button  */}
      {/* <button onClick={() => props.changeWord("Ball")}>
        Click to change title
      </button> */}
      {/* <button onClick={() => setCount(1)}>1</button> */}
    </div>
  );
}
