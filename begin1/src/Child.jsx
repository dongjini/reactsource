import React from "react";

const Child = ({ active, onClick }) => {
  console.log("child render");
  return (
    <div>
      Child : {active ? "Active" : "Not Active"}
      <button onClick={onClick}>+1</button>
    </div>
  );
};

export default React.memo(Child);
