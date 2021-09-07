//React does not import images the same way as HTML because Babel converts the code into regular HTML and CSS for the browser to use, the path ends up being different
import calendarImg from "./calendar.png";
import "./App.css";
import Footer from "./components/Footer";
import Users from "./components/Users";

//what is repeated that can be turned to reusable components: forms with input type as text, ul with list elements, submit button, fieldset  with label and input
function App() {
  return (
    <>
      <div className="App">
        <header>
          <img src={calendarImg} alt="Calendar Star Logo" />
          <h1>Eventonica</h1>
        </header>

        <main>
          <div className="user-and-events"></div>
          <Users />
          <div>
            <h3>Delete Event</h3>
            <form id="delete-event" action="#">
              <fieldset>
                <label>Event ID</label>
                <input type="number" min="1" id="delete-event-id" />
              </fieldset>
              <input type="submit" />
            </form>
          </div>

          <aside className="search-toolbar">
            <div>
              <h3>Find Events</h3>
              <form id="search" action="#">
                <fieldset>
                  <label htmlFor="date-search">Date</label>
                  <input
                    type="text"
                    id="date-search"
                    placeholder="YYYY-MM-DD"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="category-search">Category</label>
                  <input type="text" id="category-search" />
                </fieldset>

                <input type="submit" value="Search" />
              </form>
            </div>
          </aside>
        </main>
        <footer>{Footer}</footer>
      </div>
    </>
  );
}

export default App;