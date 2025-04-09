import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-text-light text-xs mb-1 font-serif"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full py-2 border-b border-primary-light focus:border-primary focus:outline-none bg-transparent text-text font-serif text-sm ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
