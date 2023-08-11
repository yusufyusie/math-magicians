import React, { useState } from 'react';

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
}

export default Calculator;
