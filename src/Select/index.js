import currencies from "../Currencies";


const Select = (currency, setCurrency) => {
  
const onSelectChange = ({ target }) => setCurrency(target.value)

  return (
    <select className="form__fieldSelector" 
    value={currency}
    onChange={onSelectChange}
    >
      {currencies.map((currency) => (
        <option 
        key={currency.id}
        value={currency.index}>
        {currency.index}
        </option>
      ))}
    </select>
  );
};

export default Select;
