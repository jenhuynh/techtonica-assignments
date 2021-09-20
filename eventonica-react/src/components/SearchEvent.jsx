import React, { useState } from "react"
import Events from "./components/Events";

//add state to handle date changes
const [date, setDate] = useState("");
//add state to handle category changes/choices
const [category, setCategory] = useState("");

const onSubmit = (e) => {
    //prevent auto refreshes
    e.preventDefault();
    //iterate through events and look for user input date or category 
    events.filter((event) => {
        if(event.category === category) {
            console.log(e);
        }
    })
    setDate("");
    setCategory("");
}
function SearchEvent ({events, setEvents}) {

    return(
          <div>
          <h3>Find Events</h3>
          <form id="search" action="#" >
            <fieldset>
              <label htmlFor="date-search">
                  Date
            </label>
              <input 
                type="date" id="date-search" placeholder="YYYY-MM-DD" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
               />
            </fieldset>
            <fieldset>
              <label           
              htmlFor="category-search">
                  Category
             </label>
              <input type="text" id="category-search" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              />
            </fieldset>

            <input type="submit" value="Search" onClick={(e) => onSubmit(e)}/>
          </form>
        </div>
    )
}
export default SearchEvent;