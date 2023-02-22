import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        fontSize: '1.5em',
        color: 'white',
        backgroundColor: 'red',
        padding: '0.5em 1em',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default Button;