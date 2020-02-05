import React from "react";
import { DropdownStyled } from "./Dropdown.styled";

export default function Dropdown({ options = [], handleChange }) {
  return (
    <DropdownStyled>
      <select onChange={handleChange}>
        <option>Select Category</option>
        {options.length &&
          options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
      </select>
    </DropdownStyled>
  );
}
