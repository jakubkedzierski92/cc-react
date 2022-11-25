

// import { useEffect, useState } from "react";

// export const useCurrentRate = () => {
// const [exchangeRate, setExchangeRate] = useState()
// const [toCurrency, setToCurrency] = useState()
// const [fromCurrency, setFromCurrency] = useState()
// const [outcomeRate, setOutcomeRate] = useState()

// useEffect(() => {
//   fetch(BASE_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       const firstCurrency = Object.keys(data.rates)[0]
//       setCurrency([data.base, ...Object.keys(data.rates)]);
//       setCurrencyOutcome([data.base, ...Object.keys(data.rates)]);
//       setFromCurrency(data.base)
//       setToCurrency(firstCurrency)
//       setExchangeRate(data.rates[firstCurrency])
//       setOutcomeRate(data.rates[fromCurrency])
//     });
// })
// }