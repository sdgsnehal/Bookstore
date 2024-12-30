/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
// Import the Router and Route component from '@solidjs/router'; below this line
import "./index.css";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import WishList from "./components/pages/WishList";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/wish-list" component={WishList} />
    </Router>
  ),
  // Enter the task 2 code below this line.
  root
);
