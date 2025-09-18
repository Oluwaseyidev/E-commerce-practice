import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>add item to Cart</button>
      <button onClick={() => setCount(count - 1)}>remove item from Cart</button>
      <div>
        <h1>Welcome,Client</h1>
      </div>
    </div>
  );
};

export default Header;
