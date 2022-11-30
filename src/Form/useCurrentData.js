import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentData = () => {
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get("https://api.exchangerate.host/latest?base=PLN")
        .then((response) => {
          setRates(response.data.rates);
          setFromCurrency(response.data.base);
          setToCurrency(response.data.base);
          setDate(response.data.date);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Something went wrong", error);
          setIsError(isError);
        });
    }, 3000);
  }, []);
  return {
    isError,
    loading,
    date,
    toCurrency,
    fromCurrency,
    rates,
    setFromCurrency,
    setToCurrency,
  };
};
