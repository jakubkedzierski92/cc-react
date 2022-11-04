import Label from "../Label";
import Input from "../Input";
import Select from "../Select";
import Result from "../Result";
import { useState } from "react";
import currencies from "../Currencies";

const Form = () => {
  const [result, setResult] = useState("0.0");
  const calculateResult = (amount, currency) => {
    const result = amount * currency.value / currency.value;
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
              <Input
              // amount={amount}
              // setAmount={setAmount}
              />
            }
            content={
              <Select
              // currencies={currencies}
              // currency={currency}
              // setCurrency={setCurrency}
              />
            }
          />
        </p>
        <p className="form__paragraph">
          <Label
            title={"Chcę:"}
            body={<Result
            result = {result}
             setResult={setResult} />}
            content={
              <Select
              // currencies={currencies}
              // currency={currency}
              // setCurrency={setCurrency}
              />
            }
          />
        </p>
      </fieldset>
    </form>
  );
};
export default Form;
