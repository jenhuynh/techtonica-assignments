import React, {useState} from 'react';
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

      //creating events state to initilize with mock events
      const [events, setEvents] = useState([event1, event2, event3]);

      //use setstate to id field
      const [id, setId] = useState("");
    
      //use setstate to name field
      const [name, setName] = useState("");

      //use setstate to date field
      const [date, setDate] = useState("");

      //use setstate to description field
      const [description, setDescription] = useState("");

       //use setstate to category field
       const [category, setCategory] = useState("");

    //add onsubmit function for form
    const onSubmit = (e) => {
        e.preventDefault(); 
        const newEvent = {id, name, date, description, category};
        const newEventList = [...events, newEvent ];
        debugger;
        setEvents(newEventList);
    }
    return (
        <>
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
          <form id="add-event" action="#" onSubmit={onSubmit}>
            <fieldset>
            {/* event id field */}
            <div>
            <label>Event Id</label>
            <input
                type="text"
                id="add-event-id"
                value={id}
                placeholder="Add event id"
                onChange={(e) => setId(e.target.value)}
              />
              </div>
              
                {/* event name field */}
                <div> 
              <label>Name</label>
              <input
                type="text"
                id="add-event-name"
                value={name}
                placeholder="Add event name"
                onChange={(e) => setName(e.target.value)}
              />
              </div>
               {/* date field */}
            <div>
            <label>Date</label>
            <input
                type="date"
                id="add-event-date"
                value={date}
                placeholder="Add event date"
                onChange={(e) => setDate(e.target.value)}
              />
              </div>       
              {/* description field */}
              <div>
            <label>Description</label>
            <input
                type="text"
                id="add-event-description"
                value={description}
                placeholder="Add event description"
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>  
                {/* category field */}
            <div>
            <label>Category</label>
            <input
                type="text"
                id="add-event-category"
                value={category}
                placeholder="Add event category"
                onChange={(e) => setCategory(e.target.value)}
              />
              </div>  
            
            </fieldset>
            
            <input type="submit" />
          </form>
    
        </div>
      </section>
    </>
  )
}

export default Events;