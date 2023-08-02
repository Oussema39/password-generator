import React, { InputHTMLAttributes, ReactElement, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactElement;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <>
        {typeof label === "string" ? (
          <p className="capitalize text-gray-600/30 mb-2">{label}</p>
        ) : (
          <div>{label}</div>
        )}
        <input ref={ref} {...props} />
      </>
    );
  }
);

export default FormInput;
