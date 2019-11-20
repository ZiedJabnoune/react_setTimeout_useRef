import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const [delayedCount, setDelayedCount] = useState(0);
  const [delayedRefCount, setDelayedRefCount] = useState(0);

  const countRef = useRef(count);
  countRef.current = count;

  let getDelayedCount = () => {
    setTimeout(() => setDelayedCount(count), 5000);
  };

  let getDelayedRefCount = () => {
    setTimeout(() => setDelayedRefCount(countRef.current), 5000);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <br />
      <button
        onClick={() => {
          getDelayedCount();
          getDelayedRefCount();
        }}
      >
        Delayed
      </button>
      <h1>{delayedCount}</h1>
      <br />
      <h1>{delayedRefCount}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
