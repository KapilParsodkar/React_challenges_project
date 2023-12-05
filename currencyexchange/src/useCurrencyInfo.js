import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [d, setd] = useState({});
  useEffect(
    function () {
      async function currencies() {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const data = await res.json();
        setd(data[currency]);
        console.log(data);
      }
      currencies();
    },
    [currency]
  );
  return d;
}

export default useCurrencyInfo;
