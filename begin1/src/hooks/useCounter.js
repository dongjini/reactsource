import React, { useState } from "react";

const useCounter = (initialValue = 0) => {
  // useState : 변수명, 함수명
  const [count, setCount] = useState(initialValue);

  console.log(useState(0));

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return { count, increase, decrease };
};

export default useCounter;
