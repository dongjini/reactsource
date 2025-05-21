import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Card from "./Card";
import Product from "./Product";
import ParentCardLayout from "./ParentCardLayout";
import Counter from "./Counter";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      <h1>World</h1> */}
      {/* <MyComponent name="React">리액트</MyComponent> */}
      {/* <Card /> */}
      {/* <Product /> */}
      {/* <ParentCardLayout /> */}
      <Counter />
    </>
  );
}

export default App;
