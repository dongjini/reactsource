import React, { useRef, useState } from "react";

const InputRef = () => {
  const inputText = useRef(null);

  const handleFocus = (e) => {
    inputText.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputText} />
      <button onClick={handleFocus}>초기화</button>
    </div>
  );
};

export default InputRef;
