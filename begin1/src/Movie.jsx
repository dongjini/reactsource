import React, { useState } from "react";

const Movie = () => {
  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/lolol.jpg");

  const handleToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("./img/lolol.jpg");
      console.log(btn);
    } else {
      setBtn(true);
      //   console.log(btn);
      setSrc("./img/lolol2.jpg");
    }
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
