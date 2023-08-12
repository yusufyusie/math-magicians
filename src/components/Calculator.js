import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './styles.css';

function Calculator() {
  const [input, setInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const displayResult = (e) => {
    const name = e.target.textContent;
    setInput((prev) => ({
      ...prev,
      total: name,
    }));
  };

   const onbuttonclick = (e) => {
    const keyValue = e.target.textContent;
    const result = calculate(input, keyValue);
    setInput(result);
  };
  const { total, next, operation } = input;

  return (
    <div className="grid-calculator">
      <button
        type="button"
        className="input button items"
        onChange={displayResult}
      >
        {total}
        {operation}
        {next}
      </button>

        {/* clear all */}
        <button
        type="button"
        className="clear button items"
        onClick={onbuttonclick}
      >
          AC
        </button>

        {/* plus or minus button */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="sign button items"
      >
          +/-
        </button>

        {/* percent button */}
        <button
          type="button"
        >
          %
        </button>
      </div>

      <div className="operations subgrid">

        {/* division btn */}
        <button
          type="button"
          onClick={onbuttonclick}
          className="equal button items"
        >
          {' '}
          ÷
        </button>

        {/* multiplication btn */}
        <button type="button" onClick={(e) => setInput(input + e.target.value)} value="x">
          {' '}
          x
        </button>

        {/* minus btn */}
        <button type="button" onClick={(e) => setInput(input + e.target.value)} value="-">
          {' '}
          -
          {' '}
        </button>

        {/* add button */}
        <button type="button">
          +
        </button>

        {/* "=" btn */}
        <button
          type="button"
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3
                    && String(eval(input)).includes('.')
                  ? String(eval(input).toFixed(4))
                  : String(eval(input)),
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
