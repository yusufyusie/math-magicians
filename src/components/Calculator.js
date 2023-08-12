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
    < className="grid-calculator">
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

        {/* module button operator button */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="module button operator"
      >
          %
        </button>

        {/* division btn */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="divided operator button"
      >
          ÷
        </button>

        <button
        type="button"
        className="seven button number"
        onClick={onbuttonclick}
        >
        7
        </button>
        <button
        type="button"
        className="eight button number"
        onClick={onbuttonclick}
        >
        8
        </button>
        <button
        type="button"
        onClick={onbuttonclick}
        className="nine button number"
        >
        9
        </button>

        {/* multiplication btn */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="times button operator"
      >
          x
        </button>

        <button
        type="button"
        onClick={onbuttonclick}
        className="four button number"
        >
        4
        </button>
        <button
        type="button"
        onClick={onbuttonclick}
        className="five button number"
        >
        5
        </button>
        <button
        type="button"
        onClick={onbuttonclick}
        className="six button number"
        >
        6
        </button>

        {/* minus btn */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="minus operator button"
      >
          -
        </button>

        <button
        type="button"
        onClick={onbuttonclick}
        className="three button number"
        >
        3
        </button>
        <button
        type="button"
        onClick={onbuttonclick}
        className="two button number"
        >
        2
        </button>
        <button
        type="button"
        onClick={onbuttonclick}
        className="one button number"
        >
        1
        </button>

        {/* add button */}
        <button
        type="button"
        onClick={onbuttonclick}
        className="plus operator button"
      >
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
