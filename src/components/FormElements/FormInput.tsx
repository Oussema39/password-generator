/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, ReactElement, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactElement;
  wrapper?: React.HTMLAttributes<HTMLDivElement>;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div
        className="flex w-full gap-2 items-center"
        style={{ minHeight: "40px" }}
      >
        {typeof label === "string" ? (
          <p className="capitalize text-white mb-0">{label}</p>
        ) : (
          <div>{label}</div>
        )}
        <input ref={ref} {...props} />
      </div>
    );
  }
);

export default FormInput;
