import React from 'react';

//Button component passing props
export const BlueButton = ({ type, width, onButtonClick, text }) => {
  return (
    <button
      type={type}
      className={`${width} min-w-min max-h-10 bg-primary-blue px-2.5 py-1.5 rounded-lg text-xs font-semibold text-primary-white hover:bg-hover-gradient1`}
      onClick={onButtonClick}>
      {text}
    </button>
  )
}




