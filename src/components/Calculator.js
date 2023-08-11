import React, { useState } from 'react';
import './styles.css';

function Calculator() {
  const [input, setInput] = useState('');
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((item) => {
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

        {/* clear button */}
        <button
          type="button"
        >
          Clear
        </button>

        {/* clear all */}
        <button
          type="button"
        >
          AC
        </button>
      </div>

      <div className="operations subgrid">

        {/* add button */}
        <button type="button">
          +
        </button>

        {/* minus btn */}
        <button type="button">
          {' '}
          -
          {' '}
        </button>

        <button type="button">
          {' '}
          *
        </button>

        <button type="button">
          {' '}
          /
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
