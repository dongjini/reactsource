import React from "react";
import Child1 from "./Child1";
import { CountProvider } from "../contexts/CountContext";
import Child3 from "./Child3";
import { ToggleProvider } from "../contexts/ToggleContext";

const Consumer = () => {
  return (
    <>
      <CountProvider>
        <h2>Count Consumer</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <h2>Toggle Consumer</h2>
        <Child3 />
      </ToggleProvider>
    </>
  );
};

export default Consumer;
