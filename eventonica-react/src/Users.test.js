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
import Form from "./components/Users";

//tests for input and placeholders for them exists
describe("<App />", () => {
  test("renders the users form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const nameInput = getByPlaceholderText("Enter Name");
    const emailInput = getByPlaceholderText("Enter Email");
    const userIdInput = getByPlaceholderText("Enter User Id");
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(userIdInput).toBeInTheDocument();
  });
});
