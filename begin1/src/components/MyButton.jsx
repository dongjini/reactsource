import React, { useState } from "react";

const MyButton = ({ style, onClick, count }) => {
  return (
    <div>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
