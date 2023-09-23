import { useState } from "react";

function App() {
  const [bill, setbill] = useState("");
  const [tip1, settip1] = useState(0);
  const [tip2, settip2] = useState(0);
  const ttip = (tip1 + tip2) / 2;
  const tbill = ttip + bill;
  function reset() {
    setbill("");
    settip1(0);
    settip2(0);
  }
  return (
    <div>
      <h1>Tip calculator</h1>
      <Billdisplay bill={bill} setbill={setbill} />

      <Totaltip tip1={tip1} settip1={settip1} tip2={tip2} settip2={settip2} />

      {bill > 0 ? (
        <h1>
          bill is {bill} your tip ${tip1} your friends tip ${tip2} therfore
          avergae tip is ${ttip}
          then total bill is ${bill + ttip} and ${tbill}
        </h1>
      ) : (
        ""
      )}
      <button onClick={reset}>reset</button>
    </div>
  );
}

function Billdisplay({ bill, setbill }) {
  return (
    <div>
      <span>Whats total bill</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />
    </div>
  );
}

function Totaltip({ tip1, settip1, tip2, settip2 }) {
  return (
    <div>
      <span>whats your tip</span>
      <select value={tip1} onChange={(e) => settip1(Number(e.target.value))}>
        <option value="0">if you didnt liked food</option>
        <option value="5">if you liked good tip $5</option>
        <option value="10">if you liked very good tip $10</option>
        <option value="20">if you liked outstanding tip $20</option>
      </select>
      <br />
      <span>whats your friends tip</span>
      <select value={tip2} onChange={(e) => settip2(Number(e.target.value))}>
        <option value="0">if you didnt liked food</option>
        <option value="5">if you liked good tip $5</option>
        <option value="10">if you liked very good tip $10</option>
        <option value="20">if you liked outstanding tip $20</option>
      </select>
    </div>
  );
}

export default App;
