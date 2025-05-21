import React from "react";

// rsc
const MyComponent = ({ name, age = "15", children }) => {
  // const name = "";

  const user = {
    name: "Jane",
    email: "jame@example.com",
  };

  const colors = ["red", "blue", "green"];

  const numbers = [1, 2, 3, 4, 5];
  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  return (
    //  묶어서 하나로 내보내야함
    <>
      <h1>children - {children}</h1>
      <h2>
        name : {user.name}({user.email})
      </h2>
      <h2>{colors[0]}</h2>
      <ul>
        {colors.map((color) => (
          <li>color : {color}</li>
        ))}
      </ul>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.price}</li>
        ))}
      </ul>
      <p>doubles : {numbers.map((n) => n * 2).join(", ")}</p>
      <p>evens : {numbers.filter((n) => n % 2 == 0).join(", ")}</p>
      <div>나의 새롭고 멋진 컴포넌트</div>
      <h1>
        {name}: {age}
      </h1>
      {name == "리액트" ? <p>리액트 입니다.</p> : <p>리액트가 아닙니다.</p>}
      {name == "리액트" && <p>리액트 입니다.</p>}
      <p>name : {name ?? <em>No Name</em>}</p>
      <p>name : {name || <em>No Name</em>}</p>
    </>
  );
};
export default MyComponent;
