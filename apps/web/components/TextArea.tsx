import React from "react";

interface TextareaProps {
  id: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | any;
  value: any;
  height: string;
  maxLength?: number;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
  autoFocus?: boolean;
  className: string;
}

const TextArea = ({
  id,
  placeholder,
  value,
  onChange,
  height = "150px",
  maxLength,
  onBlur,
  autoFocus,
  className,
}: TextareaProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-[420px]">
      <textarea
        name={id}
        className={`${className} p-4 rounded-lg border border-cWhite-32 bg-cWhite-4 backdrop-blur placeholder-cWhite-32 text-cWhite-100 font-medium w-full text-base outline-none`}
        placeholder={placeholder}
        onChange={onChange}
        style={{ height: height, resize: "none" }}
        value={value}
        maxLength={maxLength}
        onBlur={onBlur}
        autoComplete="off"
        autoFocus={autoFocus}
        required
      />
      {/* {isError && (
        <p className="pt-2 px-4 text-[#F9154B] font-[roboto] font-light">
          Please fill out this field
        </p>
      )} */}
    </div>
  );
};

export default TextArea;
