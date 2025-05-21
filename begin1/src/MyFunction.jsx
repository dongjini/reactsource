import React from "react";

const MyFunction = () => {
  const name = "홍길동";
  //   함수 작성 시 작성해야 할 코드가 한줄이라면 {}, return 생략 가능
  const greeting = (name) => `Hello, ${name}`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString;
  };

  return (
    <div>
      <p>{greeting("Christopher")}</p>
      <p>{formatDate(new Date())}</p>
      <p>
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? "moring" : "afternoon";
        })()}
      </p>
    </div>
  );
};

export default MyFunction;
