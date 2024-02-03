import PropTypes from "prop-types";


function Currencyinput(props) {
  return (
    <div className="p-7 rounded-md">
      <input
        type="text"
        value={props.amount}
        onChange={e => props.onAmountChange(e.target.value)}
        className="border rounded p-6 mr-3 text-lg"
      />
      <select
        value={props.currency}
        onChange={e => props.onCurrencyChange(e.target.value)}
        className="border bg-blue-700 text-white rounded p-6 text-lg"
      >
        {props.currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

Currencyinput.propTypes={
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies:PropTypes.array,
    onAmountChange:PropTypes.func,
    onCurrencyChange:PropTypes.func, 
  };
  
export default Currencyinput;