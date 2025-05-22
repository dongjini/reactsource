import React, { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState("");

  const handleChanged = (e) => {
    // alert(e.target.value);
    setText(e.target.value);
  };

  const handleReset = () => setText("");

  return (
    <div>
      <input type="text" onChange={handleChanged} value={text} />
      <button onClick={handleReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
};

export default InputSample;
