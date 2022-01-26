import React from "react";

export const Input = (props: any) => {
  const {label, Placeholder, onChange, name, type, value} = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={Placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};
export default Input;
