import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyComponent from "./MyComponent.jsx";
import Book from "./Book.jsx";
import MyFunction from "./MyFunction.jsx";
import MyStyle from "./MyStyle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <MyStyle /> */}
  </StrictMode>
);
