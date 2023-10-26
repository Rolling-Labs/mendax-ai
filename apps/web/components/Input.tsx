import React from "react";

interface InputProps {
  id: string;
  placeholder: string;
  onChange: any | undefined;
  value: any;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  isError: boolean;
}

const Input = ({
  id,
  placeholder,
  onChange,
  value,
  disabled,
  className,
  required = true,
  isError,
}: InputProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-[420px]">
      <input
        name={id}
        className={`${className} p-4 rounded-lg border border-cWhite-32 bg-cWhite-4 backdrop-blur placeholder-cWhite-32 text-cWhite-100 font-medium w-full text-base outline-none`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        autoComplete="off"
        required={required}
      />
      {/* {isError && (
        <p className="pt-2 px-4 text-[#F9154B] font-[roboto] font-light">
          Please fill out this field
        </p>
      )} */}
    </div>
  );
};

export default Input;
