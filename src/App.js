import logo from './logo.svg';
import './App.css';
import{useState}from "react";

function App() {
  const[calculator,setCalculator]=useState("")

  const cancel=(a)=>{
setCalculator("")
  }
  const result=()=>{
    setCalculator(eval(calculator))
  }
  const all=(c)=>{
    const lastIndex = calculator[calculator.length-1]
    const symbols = ["+","-","*","/","+/-","%"]
    if ((symbols.includes(lastIndex) && !symbols.includes(c))  || !symbols.includes(lastIndex) ){

      setCalculator( calculator+c)
    }
  }
  
  return (
    <div className="App">
      <div>
      <h3 className='header'>CALCULATOR</h3>
      <p className='display'>{ calculator}</p>
      </div>
      <div>
        <button className='buttonsS' onClick={(a)=>cancel("")}>AC</button>
        <button className='buttonsS' onClick={()=>all("+/-")}>+/-</button>
        <button className='buttonsS' onClick={()=>all("%")}>%</button>
        <button className='buttonsS' onClick={()=>all("/")}>/</button>

      </div>
      <div>
      <button className='buttons' onClick={()=>all("7")}>7</button>
      <button className='buttons' onClick={()=>all("8")}>8</button>
      <button className='buttons' onClick={()=>all("9")}>9</button>
      <button className='buttonsS' onClick={()=>all("*")}>*</button>

      </div>
        <button className='buttons' onClick={()=>all("4")}>4</button>
        <button className='buttons' onClick={()=>all("5")}>5</button>
        <button className='buttons' onClick={()=>all("6")}>6</button>
        <button className='buttonsS' onClick={()=>all("-")}>-</button>
      <div>
      <button className='buttons' onClick={()=>all("1")}>1</button>
      <button className='buttons' onClick={()=>all("2")}>2</button>
      <button className='buttons' onClick={()=>all("3")}>3</button>
      <button className='buttonsS' onClick={()=>all("+")}>+</button>

      </div>
      <div>
      <button className='buttonss' onClick={()=>all("0")}>0</button>
      <button className='buttons' onClick={()=>all(".")}>.</button>
      <button className='buttonsS' onClick={result}>=</button>

      </div>


    </div>
  );
}

export default App;
