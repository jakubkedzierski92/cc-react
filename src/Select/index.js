import currencies from "../Currencies";

const Select = ({currency}) => (
  <select
  className="form__fieldSelector"
  value={currency}>
    {currencies.map((currency) => (
        <option
        key = {currency.id}
        value = {currency.index}
        >{currency.index}</option>
    ))}
    
  </select>
);
export default Select;
