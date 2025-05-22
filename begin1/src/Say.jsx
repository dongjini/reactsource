import React, { useState } from "react";

const Say = () => {
  // massage
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("pink");

  // 입장 : 안녕하세요, 퇴장 : 안녕하가세요
  return (
    <div>
      <div>
        <button onClick={() => setMessage("안녕하세요")}>입장</button>
        <button onClick={() => setMessage("안녕히가세요")}>퇴장</button>
      </div>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "orangered" }} onClick={() => setColor("orangered")}>
        빨간색
      </button>
      <button style={{ color: "skyblue" }} onClick={() => setColor("skyblue")}>
        파란색
      </button>
      <button style={{ color: "yellowgreen" }} onClick={() => setColor("yellowgreen")}>
        초록색
      </button>
    </div>
  );
};

export default Say;
