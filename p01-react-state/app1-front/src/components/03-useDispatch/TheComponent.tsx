import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "./dux/counterSlice";
import { RootState } from "./dux/store";

import "./TheComponent.scss";

const TheComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="row">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="value">{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <hr />
    </div>
  );
};

export { TheComponent };
