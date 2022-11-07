import Label from "../Label";
import { useState } from "react";
import currencies from "../Currencies";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].index);
  const onSelectChange = ({ target }) => setCurrency(target.value);
  const [result, setResult] = useState("0.0");

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ index }) => index === currency).value;
    const currencyIn = amount * rate;
    const result = currencyIn / rate;
    setResult(result);
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
                onChange={onSelectChange}
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
            title={"Chcę:"}
            body={
              <span className="form__result" value={result}>
                {result}
              </span>
            }
            content={
              <select
                className="form__fieldSelector"
                value={currency}
                onChange={onSelectChange}
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
      </fieldset>
    </form>
  );
};
export default Form;
