import Label from "../Label";
import { useState } from "react";
import currencies from "../Currencies";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].index);
  const [currencyOutcome, setCurrencyOutcome] = useState(currencies[1].index)
  const [result, setResult] = useState("0.0");
  console.log(result)

  const calculateResult = (amount, currency, currencyOutcome) => {
    // const rate = currencies.find(({ index }) => index === currency).value;
    const result = amount * currency.value / currencyOutcome.value
    setResult(result) 
    
  };

  return (
    <form className="form" onSubmit={calculateResult}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walutowy</legend>

        <p>
          <Label
            title={"Mam:"}
            body={
              <input
                className="form__input"
                type="number"
                min="1"
                placeholder="wpisz kwotę"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
              />
            }
            content={
              <select
                className="form__fieldSelector"
                value={currency}
                onChange={({ target }) => setCurrency(currencies.find(({ index }) => index === target.value))}
              >
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.index}>
                    {currency.index}
                  </option>
                ))}
              </select>
            }
          />
        </p>
        <p className="form__paragraph">
          <Label
          setResult={setResult}
          result={result}
            title={"Chcę:"}
            body={
              <span 
              className="form__result" 
              value={result}
              >
                {result}
              </span>
            }
            content={
              <select
                className="form__fieldSelector"
                value={currencyOutcome}
                onChange={({ target }) => setCurrencyOutcome(currencies.find(({ index }) => index === target.value))}
              >
                {currencies.map((currency) => (
                  <option key={currency.id} 
                  value={currency.index}>
                    {currency.index}
                  </option>
                ))}
              </select>
            }
          />
        </p>
      </fieldset>
    </form>
  );
};
export default Form;
