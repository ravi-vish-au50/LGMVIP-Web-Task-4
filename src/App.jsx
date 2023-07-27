import React, { useState } from "react";
import "./App.css";

function App() {
  // States to manage calculator functionality
  const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");

  // Function to append a number to the current input
  const appendNumber = (num) => {
    setCurrentNumber((prev) => prev + num);
  };

  // Function to append an operator to the expression
  const appendOperator = (op) => {
    if (currentNumber === "") return;
    if (operator !== "") calculate();
    setOperator(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber("");
  };

  // Function to perform calculation
  const calculate = () => {
    if (operator === "" || currentNumber === "") return;

    let result = 0;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        break;
    }

    setCurrentNumber(result.toString());
    setOperator("");
  };

  // Function to clear the display
  const clearDisplay = () => {
    setCurrentNumber("");
    setOperator("");
    setPreviousNumber("");
  };

  // Function to update the display
  const updateDisplay = (value) => {
    setCurrentNumber(value);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={currentNumber} readOnly />
      </div>
      <div className="buttons">
        {/* Calculator Buttons */}
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => appendNumber("7")}>7</button>
        <button onClick={() => appendNumber("8")}>8</button>
        <button onClick={() => appendNumber("9")}>9</button>
        <button onClick={() => appendOperator("+")}>+</button>
        <button onClick={() => appendNumber("4")}>4</button>
        <button onClick={() => appendNumber("5")}>5</button>
        <button onClick={() => appendNumber("6")}>6</button>
        <button onClick={() => appendOperator("-")}>-</button>
        <button onClick={() => appendNumber("3")}>3</button>
        <button onClick={() => appendNumber("2")}>2</button>
        <button onClick={() => appendNumber("1")}>1</button>
        <button onClick={() => appendOperator("*")}>*</button>
        <button onClick={() => appendNumber("0")}>0</button>
        <button onClick={() => appendOperator(".")}>.</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => appendOperator("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
