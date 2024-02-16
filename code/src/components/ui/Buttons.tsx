import React from 'react';

interface ButtonProps {
  buttontype: "submit" | "reset" | "button" | undefined
  width: string;
  height?: string;
  onButtonClick?: () => void;
  text: string;
}

//Button component passing props
export const BlueButton: React.FC<ButtonProps> = ({ buttontype, width, height, onButtonClick, text }) => {
  return (
    <button
      type={buttontype}
      className={`${width} ${height} min-w-min max-h-10 bg-primary-blue px-2.5 py-1.5 rounded-lg text-xs font-semibold text-primary-white hover:bg-hover-gradient1`}
      onClick={onButtonClick}>
      {text}
    </button>
  )
}




