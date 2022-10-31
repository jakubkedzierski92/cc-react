import Label from "../Label";
import Input from "../Input";
import Select from "../Select"
import Result from "../Result";
const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walutowy</legend>

      <p>
        <Label 
        title ={"Mam:"}
        body = {<Input />}
        content = {<Select />}
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

export default Form;
