import React, { useCallback, useState } from "react";
import reactToWebComponent from "react-to-webcomponent";
import * as ReactDOM from "react-dom";

import "./index.css";

function Counter() {
  const [amount, setAmount] = useState(0);

  const handleAmount = useCallback(
    (action: string): void => {
      if (action === "plus") return setAmount(amount + 1);
      else return setAmount(amount - 1);
    },
    [amount]
  );

  return (
    <div className="counter-wrapper">
      <div className="content">
        <button
          className="counter-button"
          onClick={() => handleAmount("minus")}
        >
          -
        </button>
        <span className="amount">{amount}</span>
        <button className="counter-button" onClick={() => handleAmount("plus")}>
          +
        </button>
      </div>
    </div>
  );
}

customElements.define(
  "x-counter",
  reactToWebComponent(Counter, React, ReactDOM)
);

export default Counter;
