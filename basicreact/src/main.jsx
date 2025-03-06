import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google",
};

const areactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Google here"
);

const ANotherElement = <a href="https://www.google.com">Visit Google</a>;

createRoot(document.getElementById("root")).render(
  // areactElement
  <App />
);
