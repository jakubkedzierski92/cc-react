import Label from "../Label";
import { useState, useRef, useEffect } from "react";
// import currencies from "../Currencies";
import Clock from "../Clock/index.js";
import {
  Background,
  Button,
  ButtonParagraph,
  Fieldset,
  FormParagraph,
  Input,
  Legend,
  Selector,
  StyledForm,
} from "./styled";
import axios from "axios";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState([]);
  const [currencyOutcome, setCurrencyOutcome] = useState([]);
  const [result, setResult] = useState("0.0");
  const [toCurrency, setToCurrency] = useState();
  const [fromCurrency, setFromCurrency] = useState([]);
  const [rate, setRate] = useState();
  const [outcomeRate, setOutcomeRate] = useState();
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    axios.get("https://api.exchangerate.host/base=USD").then((response) => {
      const apiData = response.data;
      const selectedCurrency = Object.keys(apiData.rates)[0];
      setCurrency([apiData.base, ...Object.keys(apiData.rates)]);
      setCurrencyOutcome([apiData.base, ...Object.keys(apiData.rates)]);
      setFromCurrency(apiData.base);
      setToCurrency(selectedCurrency);
      setRate(apiData.rates[selectedCurrency]);
      setOutcomeRate(apiData.rates[fromCurrency]);
    });
  }, []);
 
  const calculateResult = (event) => {
    event.preventDefault();

    const outcome = (amount * rate) / outcomeRate;
    setResult(outcome.toFixed(2));
  };

  return (
    <Background>
      <StyledForm onSubmit={calculateResult}>
        <Fieldset>
          <Legend>Kalkulator walutowy</Legend>
          <Clock />
          <p>
            <Label
              title={"Mam:"}
              body={
                <Input
                  ref={inputRef}
                  type="number"
                  min="1"
                  placeholder="wpisz kwotę"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                />
              }
              content={
                <Selector
                  value={fromCurrency}
                  currency={currency}
                  onChange={({ target }) => setFromCurrency(target.value)}
                >
                  {currency.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Selector>
              }
            />
          </p>
          <ButtonParagraph>
            <Button onClick={focusInput}>Przelicz</Button>
          </ButtonParagraph>
          <FormParagraph>
            <Label
              setResult={setResult}
              result={result}
              title={"Chcę:"}
              body={
                <Input
                  outcome
                  value={result}
                  onChange={({ target }) => setResult(target.value)}
                  disabled
                />
              }
              content={
                <Selector
                  value={toCurrency}
                  currencyOutcome={currencyOutcome}
                  onChange={({ target }) => setToCurrency(target.value)}
                >
                  {currencyOutcome.map((currencyOutcome) => (
                    <option key={currencyOutcome} value={currencyOutcome}>
                      {currencyOutcome}
                    </option>
                  ))}
                </Selector>
              }
            />
          </FormParagraph>
        </Fieldset>
      </StyledForm>
    </Background>
  );
};
export default Form;
