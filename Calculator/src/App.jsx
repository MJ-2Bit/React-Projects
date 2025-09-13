import styles from "./App.module.css"
import ButtonContainer from "./components/buttonContainer"
import Display from "./components/display"
import { useState } from "react";

function  App() {

  const [calVal, setVal] = useState("");
 const onButtonClick = (buttonText) =>{
  if (buttonText === 'C'){
  setVal("");

  }else if (buttonText === '='){
   const result = eval(calVal);
   setVal(result);
  }else{
    const newDisplayVal = calVal + buttonText;
    setVal(newDisplayVal);
  }
 }
  
  return <div className={styles.calculator} >
   <Display displayVal={calVal} ></Display>
   <ButtonContainer btnClick={onButtonClick}></ButtonContainer>
  </div>
  
}

export default App
