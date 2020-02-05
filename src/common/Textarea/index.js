import React from "react";
import { TextareaStyled } from "./Textarea.styled";
export default function Textarea({
  size = "small",
  placeholder,
  handleChange,
  label = "Enter text",
  name = ""
}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <TextareaStyled
        size={size}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="form-control"
        rows="3"
      />
    </div>
  );
}
