import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

test("renders the Redux counter", () => {
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByRole("heading", { name: /counter state, kept simple/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /increase counter/i })).toBeInTheDocument();
});