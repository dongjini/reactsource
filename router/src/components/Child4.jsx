import React from "react";
import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";

const Child4 = () => {
  // context 가져오기
  const { toggle } = useContext(ToggleContext);
  return (
    <div>
      <h2>Child4</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Child4;
