import './App.css';
import Button from './Components/Button/Button';
import Display from './Components/Display/Display';
import {useState} from 'react';

function App() {
  const [display,setDisplay] = useState("");

  const addInputValue = (valor) =>{
    setDisplay(display+(valor.target.name));
  }

  const clear = () =>{
    setDisplay(" ");
  }

  const achaSinal = () =>{
    let i=0;
    let achado;
    var primeiroValor;
    var segundoValor;
    for(i=0;i<=display.length;i++){
      achado=display.substring(i,i+1);
      if(achado==="+"){
        primeiroValor=display.substring(0,i);
        segundoValor=display.substring(i+1,display.length);
        let conta = parseFloat(primeiroValor)+parseFloat(segundoValor);
        setDisplay(conta.toFixed(1));
      }
      if(achado==="/"){
        primeiroValor=display.substring(0,i);
        segundoValor=display.substring(i+1,display.length);
        let conta = parseFloat(primeiroValor)/parseFloat(segundoValor)
        setDisplay(conta.toFixed(1));
      }
      if(achado==="X"){
        primeiroValor=display.substring(0,i);
        segundoValor=display.substring(i+1,display.length);
        let conta =(parseFloat(primeiroValor)*parseFloat(segundoValor))
        setDisplay(conta.toFixed(1));
      }
    }
  }

  const negativa = () =>{
    var resp = parseInt(display)*-1
    console.log(resp,resp.toString)
    setDisplay(resp)
  }

  return (
    <div className="container">
      <Display valor={display}/>
      <div className="buttons">
        <Button onClick={clear}>c</Button>
        <Button onClick={negativa}>+/-</Button>
        <Button name="%" onClick={addInputValue}>%</Button>
        <Button name="/" onClick={addInputValue}>&divide;</Button>
        <Button name="7" onClick={addInputValue} >7</Button>
        <Button name="8" onClick={addInputValue} >8</Button>
        <Button name="9" onClick={addInputValue} >9</Button>
        <Button name="X" onClick={addInputValue}>X</Button>
        <Button name="4" onClick={addInputValue}>4</Button>
        <Button name="5" onClick={addInputValue}>5</Button>
        <Button name="6" onClick={addInputValue}>6</Button>
        <Button name="-" onClick={addInputValue} >&ndash;</Button>
        <Button name="1" onClick={addInputValue}>1</Button>
        <Button name="2" onClick={addInputValue}>2</Button>
        <Button name="3" onClick={addInputValue}>3</Button>
        <Button name="+" onClick={addInputValue}>+</Button>
        <Button name="0" onClick={addInputValue}>0</Button>
        <Button name="." onClick={addInputValue}>,</Button>
        <Button onClick={achaSinal}>=</Button>
      </div>
      
    </div>
  );
}

export default App;
