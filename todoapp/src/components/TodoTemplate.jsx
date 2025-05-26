import React from "react";

const TodoTemplate = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-3xl bg-cyan-800 w-3/5 p-3 text-white text-center">일정관리</div>
      <div className="w-3/5 bg-white">{children}</div>
    </div>
  );
};

export default TodoTemplate;
