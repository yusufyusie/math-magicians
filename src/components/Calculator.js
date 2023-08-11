import React, { useState } from 'react';
import './styles.css';

function Calculator() {
  const [input, setInput] = useState('');
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((item) => {
    calcBtns.push(
      <button
        type="button"
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {' '}
        {item}
      </button>,
    );
  });

  return (
    <div className="wrapper">
      {' '}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">

        {/* clear all */}
        <button
          type="button"
        >
          AC
        </button>

        {/* plus or minus button */}
        <button
          type="button"
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
        <button type="button">
          {' '}
          ÷
        </button>

        {/* multiplication btn */}
        <button type="button">
          {' '}
          x
        </button>

        {/* minus btn */}
        <button type="button">
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
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
