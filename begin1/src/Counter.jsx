import React, { useState } from "react";

const Counter = () => {
  // useState : 변수명, 함수명
  const [count, setCount] = useState(0);

  console.log(useState(0));

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Counter;
