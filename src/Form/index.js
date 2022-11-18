import Label from "../Label";
import { useState } from "react";
import currencies from "../Currencies";
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

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [currencyOutcome, setCurrencyOutcome] = useState(
    currencies[1].shortName
  );
  const [result, setResult] = useState("0.0");

  const calculateResult = (event) => {
    event.preventDefault();

    const rate = currencies.find(
      ({ shortName }) => shortName === currency
    ).value;
    const rateOut = currencies.find(
      ({ shortName }) => shortName === currencyOutcome
    ).value;

    const outcome = (amount * rate) / rateOut;
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
                  type="number"
                  min="1"
                  placeholder="wpisz kwotę"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                />
              }
              content={
                <Selector
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {currencies.map(({ shortName }) => (
                    <option key={shortName} value={shortName}>
                      {shortName}
                    </option>
                  ))}
                </Selector>
              }
            />
          </p>
          <ButtonParagraph>
            <Button>Przelicz</Button>
          </ButtonParagraph>
          <FormParagraph>
            <Label
              setResult={setResult}
              result={result}
              title={"Chcę:"}
              body={
                <Input
                  result
                  value={result}
                  onChange={({ target }) => setResult(target.value)}
                  disabled
                />
              }
              content={
                <Selector
                  value={currencyOutcome}
                  onChange={({ target }) => setCurrencyOutcome(target.value)}
                >
                  {currencies.map(({ shortName }) => (
                    <option key={shortName} value={shortName}>
                      {shortName}
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
