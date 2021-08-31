import React, { useState } from "react";

function useFilters() {
  const [search, setSearch] = useState("");
  const [greaterThan, setGreaterThan] = useState(0);
  const [lessThan, setLessThan] = useState(20);

  //return JSX to an object
  return {
    search,
    greaterThan,
    lessThan,
    //turning JSX property the render
    render: (
      <div className="child">
        <p>Filters</p>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          defaultValue="Greater than"
          onChange={(e) => setGreaterThan(e.target.value)}
        />
        <input
          type="number"
          defaultValue={lessThan}
          placeholder="Less than"
          onChange={(e) => setLessThan(e.target.value)}
        />
      </div>
    ),
  };
}

function DisplayContent({ search, greaterThan, lessThan }) {
  return (
    <div>
      <p>DisplayContent</p>
      <p>search: {search}</p>
      <p>greaterThan: {greaterThan}</p>
      <p>lessThan: {lessThan}</p>
    </div>
  );
}

function Parent() {
  {
    /* //destructure useFilters function to use as props to our display content component*/
  }
  const { render, search, greaterThan, lessThan } = useFilters();
  // const { props, useState } = Parent();
  //updating parent with the useState, setWord will change and set word to whatever we pass in the childcomponent prop, setWord
  //parent is the intial state we set
  // const [word, setWord] = useState("Parent");
  // //creating counter useState
  // const [count, setCount] = useState();
  return (
    <>
      <div className="parent">
        <p>Parent</p>

        {/* passing multiple props with spread operator from useFilter function into displaycontent component */}
        <DisplayContent {...{ search, greaterThan, lessThan }} />
        {render}
        {/* <h1>{word}</h1>
        <p>count: {count}</p> */}
        {/* put child component in parent component */}
        {/* take onClick function we made in Child component and set it as a prop in Child component here */}
        {/* passing setCount state to the child component */}
        {/* <Child setCount={setCount} changeWord={(word) => setWord(word)} /> */}
      </div>
    </>
  );
}

export default Parent;
