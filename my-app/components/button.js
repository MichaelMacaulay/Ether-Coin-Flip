import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  )
}

export default Button
