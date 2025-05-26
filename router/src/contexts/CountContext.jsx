import React from "react";
import { useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

// 데이터를 공급하는 컴포넌트
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // 공급할 데이터를 객체로 묶어서 value 라는 속성에 넣어주기
  return <CountContext value={{ count, setCount }}>{children}</CountContext>;
};

export { CountContext, CountProvider };
