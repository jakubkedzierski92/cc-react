import Label from "../Label";
import { useState } from "react";
import currencies from "../Currencies";
import "./style.css"

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [currencyOutcome, setCurrencyOutcome] = useState(currencies[1].shortName);
  const [result, setResult] = useState("0.0");

  const calculateResult = (event) => {
    event.preventDefault();

    const rate = currencies.find(({ shortName }) => shortName === currency).value;
    const rateOut = currencies.find(
      ({ shortName }) => shortName === currencyOutcome
    ).value;

    const result = (amount * rate) / rateOut;
    setResult(result.toFixed(2));
  };

  return (
    <form className="form" onSubmit={calculateResult}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walutowy</legend>
        <p className="clock__paragraph">
       
        </p>
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
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map(({ shortName }) => (
                  <option key={shortName} value={shortName}>
                    {shortName}
                  </option>
                ))}
              </select>
            }
          />
        </p>
        <p className="button__paragraph">
          <button
            className="button"
          >
            Przelicz
          </button>
        </p>
        <p className="form__paragraph">
          <Label
            setResult={setResult}
            outcome={result}
            title={"Chcę:"}
            body={
              <input
                className="form__input--result"
                value={result}
                onChange={({ target }) => setResult(target.value)}
                disabled
              />
             
            }
            content={
              <select
                className="form__fieldSelector"
                value={currencyOutcome}
                onChange={({ target }) => setCurrencyOutcome(target.value)}
              >
                {currencies.map(({shortName}) => (
                  <option key={shortName} value={shortName}>
                    {shortName}
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
