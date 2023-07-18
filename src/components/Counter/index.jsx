import "./Counter.style.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count < 0) {
      setCount(0);
    }
  };

  return (
    <div className="count_color">
      <div>
        <p>{count <= 0 ? <span className="red-zero">0</span> : count}</p>
        <div className="buttons">
          <button onClick={handleIncrement} className="btn btn-success">
            Increase
          </button>
          <button onClick={handleDecrement} className="btn btn-danger">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};