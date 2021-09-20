import React, { useState } from 'react';
import Events from "./Events";
 
function DeleteEvent ({events, setEvents}){
    //add state to delete event changes
    const [deleteEventId, setDeleteEventId] = useState('');

    //onsubmit for deleteevent
    const deleteEvent = (e) => {
      e.preventDefault();
      // look through events with deleteEventId state 
      events = (events.filter(event => event.id != deleteEventId));
      console.log(deleteEventId);
      console.log(events);
      setDeleteEventId('');
    }
    return (
        <div>
          <h3>Delete Event</h3>
          <form id="delete-event" action="#">
            <fieldset>
              <label>Event ID</label>
              <input type="number" min="1" id="delete-event-id"
              value={deleteEventId}
              onChange={(e) => setDeleteEventId(e.target.value)}
              />
            </fieldset>
            <input type="submit" value="Delete Event" onClick={(e) => deleteEvent(e)}/>
          </form>
        </div>
    )
}

export default DeleteEvent;