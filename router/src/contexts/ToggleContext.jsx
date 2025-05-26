import React from "react";
import { Children } from "react";
import { useState } from "react";
import { createContext } from "react";

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);
  return <ToggleContext value={{ isOn, toggle }}>{children}</ToggleContext>;
};

export { ToggleContext, ToggleProvider };
