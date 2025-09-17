import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/*  <p>Count:{count}</p> */}
      <button onClick={() => setCount(count + 1)}>
        Add To Cart {count + " items"}{" "}
      </button>
      <div>
        <h1>Welcome,Client</h1>
      </div>
    </div>
  );
};

export default Header;
