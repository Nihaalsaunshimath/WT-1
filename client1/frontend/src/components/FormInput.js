import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
