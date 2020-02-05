import React from "react";

export default function TextField({
  handleChange,
  placeholder = "Enter the value",
  label = "Enter the value",
  name = ""
}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        type="text"
        className="form-control"
      />
    </div>
  );
}
