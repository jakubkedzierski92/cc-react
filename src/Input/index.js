

const Input = (amount, setAmount) => {
    
return (
    <input 
    className="form__input" 
    type="number" 
    min="1" 
    placeholder ="wpisz kwotę"
    value = {amount}
    onChange = {({ target }) => setAmount(target.value)}
    />
)
    }

export default Input;