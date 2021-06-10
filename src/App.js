import './App.css';
import Button from './Components/Button/Button';
import Display from './Components/Display/Display';
import {useState} from 'react';

function App() {
  const [display,setDisplay] = useState("");

  return (
    <div className="container">
      <Display/>
      <div className="buttons">
        <Button a="c"/>
        <Button a="+/-"/>
        <Button a="%"/>
        <Button a="/"/>
        <Button a="7"/>
        <Button a="8"/>
        <Button a="9"/>
        <Button a="X"/>
        <Button a="4"/>
        <Button a="5"/>
        <Button a="6"/>
        <Button a="-"/>
        <Button a="1"/>
        <Button a="2"/>
        <Button a="3"/>
        <Button a="+"/>
        <Button a="0"/>
        <Button a=","/>
        <Button a="="/>
      </div>
      
    </div>
  );
}

export default App;
