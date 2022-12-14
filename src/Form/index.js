import Label from "../Label";
import { useState } from "react";
import { useRef } from "react";
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
  Info,
  Loader,
  LoaderSpan,
  ErrorSpan,
  ErrorDiv,
} from "./styled";
import { useCurrentData } from "./useCurrentData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("0.0");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const {
    isError,
    loading,
    date,
    toCurrency,
    fromCurrency,
    rates,
    setToCurrency,
    setFromCurrency,
  } = useCurrentData();

  const calculateResult = (event) => {
    event.preventDefault();

    const outcome = (amount * rates[toCurrency] / rates[fromCurrency]);
    setResult(outcome.toFixed(2));
  };

  return loading ? (
    <Loader>
      <LoaderSpan>Pobieram akutalne kursy walut...</LoaderSpan>
    </Loader>
  ) : isError ? (
    <ErrorDiv>
      <ErrorSpan>Coś poszło nie tak... spróbuj później.</ErrorSpan>
    </ErrorDiv>
  ) : (
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
                  onChange={({ target }) => setFromCurrency(target.value)}
                >
                  {Object.keys(rates).map((fromCurrency) => (
                    <option key={fromCurrency} value={fromCurrency}>
                      {fromCurrency}
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
                  onChange={({ target }) => setToCurrency(target.value)}
                >
                  {Object.keys(rates).map((toCurrency) => (
                    <option key={toCurrency} value={toCurrency}>
                      {toCurrency}
                    </option>
                  ))}
                </Selector>
              }
            />
          </FormParagraph>
        </Fieldset>
        <Info>Kursy walut pobrane w dniu: {date}</Info>
      </StyledForm>
    </Background>
  );
};
export default Form;
