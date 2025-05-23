import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const increase = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={() => setActive(!active)}>변경</button>
      <p>count : {count}</p>
      <Child active={active} onClick={increase} />
    </div>
  );
};

export default Parent;
