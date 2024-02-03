import './index.css';
import Currencyinput from './/components/Currencyinput';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Header from './/components/Header';
import Swap from './/components/Swap';
function App() {


const [amount1, setAmount1] = useState(1);
const [amount2, setAmount2] = useState(1);
const [currency1,setCurrency1] = useState('USD');
const [currency2,setCurrency2] = useState('EUR');
const [rates,setRates] = useState([]);

useEffect(()=>{
axios.get('')//Add your Axios access key here 
.then(response =>{
  setRates(response.data.rates);
 })
},[]);

useEffect(()=>{
  if(!!rates){
    handleAmount1Change(1);
  }
},[rates]);

function hArrow(amount1,amount2,currency1,currency2){
  let x = amount1;
  setAmount1(amount2);
  setAmount2(x);
  let y = currency1;
  setCurrency1(currency2);
  setCurrency2(y);
}

function format(number){
  return number.toFixed(4);
}

function handleAmount1Change(amount1){

  setAmount2(format(amount1 * rates[currency2]/rates[currency1]));
  setAmount1(amount1);
}
function handleCurrency1Change(currency1){
  setAmount2(format(amount1 * rates[currency2]/rates[currency1]));
  setCurrency1(currency1);
}
function handleAmount2Change(amount2){

  setAmount1(format(amount2 * rates[currency1]/rates[currency2]));
  setAmount2(amount2);
}
function handleCurrency2Change(currency2){
  setAmount1(format(amount2 * rates[currency1]/rates[currency2]));
  setCurrency2(currency2);
}



return (
  <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-600 to-purple-700">
    <Header />

    <div className="flex flex-col items-center mt-20">
     
      <div className="mb-4 md:mb-0"> 
        <Currencyinput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
      </div>

   
      <Swap onClick={() => hArrow(amount1, amount2, currency1, currency2)} />

      <div className="mt-4 md:mt-0"> 
        <Currencyinput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </div>
  </div>
);
}

export default App;




