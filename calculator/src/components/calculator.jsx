import React, { useState } from "react";
import styles from "../components/calculator.module.css"

const Calculator  = () =>{

  const [input,setInput] = useState("");
  const [result,setResult] = useState("");

  const handleClick=(value)=>{

   if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Use Function constructor instead of eval for safer evaluation
        const output = new Function(`return (${input})`)();
        setResult(output);
      } catch (err) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const Buttons= [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];
return(
  <div>
    <h1 className={styles.header}>React Calculator</h1>
    <input className={styles.inputbox}type="text" value={input}  readOnly/>
    <span className={styles.text}>{result}</span>
    <div className={styles.lowercalc}>
   {Buttons.map((btn) => (<button
  key={btn} 
  className = {styles.butns}
  onClick={() => {handleClick(btn)}}
   >{btn}</button>))}
    </div>
  </div>
)
}
export default Calculator;