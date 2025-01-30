import React, { useState } from "react";

function CalFN() {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [previousInput, setPreviousInput] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const handleNumberPress = (number: string) => {
    setCurrentInput((prev) => prev + number);
  };

  const handleOperatorPress = (op: string) => {
    if (result && !previousInput) {
      setPreviousInput(result);
      setCurrentInput("");
      setOperator(op);
      setResult("");
    } else if (currentInput) {
      setPreviousInput(currentInput);
      setCurrentInput("");
      setOperator(op);
    }
  };

  const handleCalculate = () => {
    if (!operator || !previousInput || !currentInput) {
      return;
    }

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let calculation = 0;

    switch (operator) {
      case "+":
        calculation = prev + curr;
        break;
      case "-":
        calculation = prev - curr;
        break;
      case "*":
        calculation = prev * curr;
        break;
      case "/":
        calculation = curr !== 0 ? prev / curr : 0;
        break;
      default:
        return;
    }
    setResult(calculation.toString());
    setCurrentInput("");
    setPreviousInput("");
    setOperator(null);
  };

  const handleClear = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperator(null);
    setResult("");
  };

  return {
    currentInput,
    previousInput,
    operator,
    result,
    handleNumberPress,
    handleOperatorPress,
    handleCalculate,
    handleClear,
  };
}

export default CalFN;
