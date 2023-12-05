import { useState } from "react";

import useCurrencyInfo from "./useCurrencyInfo";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setamount] = useState(" ");
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [converted, setconverted] = useState(" ");

  const currencyinfo = useCurrencyInfo(from);
  const ops = Object.keys(currencyinfo);
  console.log(ops);
  function convert(e) {
    e.preventDefault();
    setconverted(amount * currencyinfo[to]);
  }
  return (
    <div>
      <form onSubmit={convert}>
        <label>write an amount</label>
        <br />
        <input
          type="text"
          value={amount}
          onChange={(e) => setamount(Number(e.target.value))}
        />
        <span>select country from</span>
        <select value={from} onChange={(e) => setfrom(e.target.value)}>
          {ops.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br />
        <span>select country to</span>
        <select value={to} onChange={(e) => setto(e.target.value)}>
          {ops.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button>convert</button>
      </form>
      <h1>{converted}</h1>
    </div>
  );
}
