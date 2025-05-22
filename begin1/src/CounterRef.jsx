import React, { useRef, useState } from "react";

const CounterRef = () => {
  let num = 1;
  const count1 = useRef(0);
  const [count2, setCount2] = useState(0);

  num += 1;
  console.log(num);

  const increase = () => {
    count1.current += 1;
    console.log("Ref Count" + count1.current);
  };

  return (
    <div>
      <h1>count1 : {count1.current}</h1>
      <h1>count2 : {count2}</h1>
      <button onClick={increase}>useRef</button>
      <button onClick={() => setCount2(count2 + 1)}>useState</button>
    </div>
  );
};

export default CounterRef;
