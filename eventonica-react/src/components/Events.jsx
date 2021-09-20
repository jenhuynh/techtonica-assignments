import React, {useReducer, useState} from 'react';
// import SearchEvents from "./SearchEvent";

  //initial state for the form reducer which is an object with keys for each field in the form, values will be updated as the user fills out the form
  const initialState = {
    id: "",
    name: "",
    date: null,
    description: "",
    category: "",
  };

       //reducer function, each action type will mutate the state in its own way and reducer function returns a new state
       const reducer = (state, action) => {
        console.log(action, "this is the action");
        
        switch (action.type) {
          case "editName":
            console.log("Logged if the editName action is being dispatched")
            return { ...state, name: action.payload };
            // payload refers to the data of the state
        case "editId":
            return { ...state, id: action.payload };
        case "editDate":
                return { ...state, date: action.payload };
          case "editDescription":
            return { ...state, description: action.payload };
      
          case "editCategory":
            return { ...state, category: action.payload };
      
          default:
            return state;
        }
      };

//create UI that renders a list of events
const Events = () => {
    const event1 = {
        id: 1,
        name: "Birthday",
        date: "2021-09-01",
        description: "A birthday party for my best friend",
        category: "Celebration",
      };
      
      const event2 = {
        id: 2,
        name: "Graduation",
        date: "2021-08-01",
        description: "The class of 2021 graduates from East High",
        category: "Education",
      };
      
      const event3 = {
        id: 3,
        name: "JS Study Session",
        date: "2021-10-01",
        description: "A chance to practice Javascript interview questions",
        category: "Education",
      };
      //use setstate to id field
    //   const [id, setId] = useState("");
    
    //   //use setstate to name field
    //   const [name, setName] = useState("");

    //   //use setstate to date field
    //   const [date, setDate] = useState("");

    //   //use setstate to description field
    //   const [description, setDescription] = useState("");

    //    //use setstate to category field
    //    const [category, setCategory] = useState("");


    // const EventForm = () => {
         //creating events state to initilize with mock events
      const [events, setEvents] =  useState([event1, event2, event3]  );
    
      //reducers will store and update the form data
        const [state, dispatch] = useReducer(reducer, initialState);
          //add onsubmit function for form
    // const onSubmit = (e) => {
    //     e.preventDefault(); 
    //     // const newEvent = {id, name, date, description, category};
    //     const newEvent = {editId editName; editDate, editDescription, editCategory};
    //     const newEventList = [...events, newEvent ];
    //     setEvents(state);
    // }
    const addEvent = e => {
        e.preventDefault();
        const newEvent = {
            //object named state but it does not have separate data 
          id: state.id,
          name: state.name,
          date: state.date,
          description: state.description,
          category: state.category,
        }
        setEvents([...events, newEvent])
        console.log(newEvent)
      }
 
    return (
        <div>
        <section className="event-management">
        <h2>Event Management</h2>
        
        <div>
          <h3>All Events</h3>
          <ul id="events-list">
            {/* Display all Events here */}
            {/* iterates through each event and display its name, description, etc. */}
            {events.map((event, i) => <p><li key={i}>Event ID: {event.id}, Event Name: {event.name}, Description: {event.description}, Date: {event.date}, Category: {event.category} </li></p>)}
          </ul>

          <h3>Add Event</h3>
          <form id="add-event" action="#">
            <fieldset>
            {/* event id field */}
            <div>
            <label>Event Id</label>
            <input
                type="text"
                required
                name="id"
                id="add-event-id"
                value={state.id}
                placeholder="Event Id"
                onChange={(e) =>
                    dispatch({
                    type: "editId",
                    payload: e.target.value
                    })
                  }
                // onChange={(e) => setId(e.target.value)}
              />
              </div>
              
                {/* event name field */}
                <div> 
              <label>Name</label>
              {/* when input is changed, it will dispatch the "editName" action */}
              <input
                type="text"
                name="name"
                id="add-event-name"
                value={state.name}
                placeholder="Event Name"
                onChange={(e) =>
                    dispatch({
                    type: "editName",
                // The payload of this action aka the data will be the input field value. The reducer will "read" this action and know to update state.name
                    payload: e.target.value
                    })
                  }
                // onChange={(e) => setName(e.target.value)}
              />
              </div>
               {/* date field */}
            <div>
            <label>Date</label>
            <input
                type="date"
                name="date"
                id="add-event-date"
                value={state.date}
                placeholder="Event Date"
                onChange={(e) =>
                    dispatch({
                    type: "editDate",
                    payload: e.target.value
                    })
                  }
                // onChange={(e) => setDate(e.target.value)}
              />
              </div>       
              {/* description field */}
              <div>
            <label>Description</label>
            <input
                type="text"
                name="description"
                id="add-event-description"
                value={state.description}
                placeholder="Event Decription"
                onChange={(e) =>
                    dispatch({
                    type: "editDescription",
                    payload: e.target.value
                    })
                  }
                // onChange={(e) => setDescription(e.target.value)}
              />
              </div>  
                {/* category field */}
            <div>
            <label>Category</label>
            <input
                type="text"
                name="category"
                id="add-event-category"
                value={state.category}
                placeholder="Event Category"
                onChange={(e) =>
                    dispatch({
                    type: "editCategory",
                    payload: e.target.value
                    })
                  }
                // onChange={(e) => setCategory(e.target.value)}
              />
              </div>  
            </fieldset>
            <input type="submit"  onClick={addEvent}/>
          </form>
        </div>
      </section>
      {/* <aside className="search-toolbar">
          <SearchEvents events={events} setEvents={setEvents} />
        </aside> */}
    </div>
  )
}


export default Events;