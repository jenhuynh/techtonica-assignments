import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//testing if app component exists and renders
//screen.debug will show us the result of the redner()call
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.debug();
  });
});
