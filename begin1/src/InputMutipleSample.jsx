import React, { useState } from "react";

const InputMutipleSample = () => {
  //   const [name, setName] = useState("");
  //   const [nickName, setNickname] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const handleChanged = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({
      // 먼저 수정된 값 복제
      ...inputs,
      // 변경된 값 변화
      [name]: value,
    });
  };

  const handleReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="이름" name="name" onChange={handleChanged} value={name} />
      </div>
      <div>
        <input type="text" placeholder="닉네임" name="nickname" onChange={handleChanged} value={nickname} />
      </div>
      <div>
        <button onClick={handleReset}>초기화</button>
      </div>
      <div>
        <h4>
          입력값 : {name} ({nickname})
        </h4>
      </div>
    </div>
  );
};

export default InputMutipleSample;
