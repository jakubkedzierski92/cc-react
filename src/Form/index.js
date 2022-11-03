import Label from "../Label";
import Input from "../Input";
import Select from "../Select"
import Result from "../Result";
import  {useState} from "react"
import currencies from "../Currencies";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    

return (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walutowy</legend>

      <p>
        <Label 
        title ={"Mam:"}
        body = {<Input amount={amount} setAmount={setAmount} />}
        content = {<Select currencies={currencies} currency={currency} setCurrency={setCurrency} />}
        />
      </p>
      <p className="form__paragraph">
       <Label 
       title = {"Chcę:"}
        body = {<Result />}
        content = {<Select />}
       />
      </p>
    </fieldset>
  </form>
);
}
export default Form;
