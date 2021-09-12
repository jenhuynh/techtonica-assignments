import {
  getAllByDisplayValue,
  getByPlaceholderText,
  fireEvent,
  FireFunction,
  prettyDOM,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import Form from "./components/Events";

//tests for input and placeholders for them exists
describe("<App />", () => {
  test("renders the event form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const idInput = getByPlaceholderText("Event Id");
    const nameInput = getByPlaceholderText("Event Name");
    const dateInput = getByPlaceholderText("Event Date");
    const descriptionInput = getByPlaceholderText("Event Decription");
    const categoryInput = getByPlaceholderText("Event Category");
    expect(idlInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(categoryInput).toBeInTheDocument();
  });
});
