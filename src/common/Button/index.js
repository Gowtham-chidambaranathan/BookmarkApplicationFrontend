import React from "react";
import { ButtonStyled } from "./Button.styled";

export default function Button({
  text = "",
  handleClick,
  buttonStyle = "primary",
  buttonType = "button"
}) {
  return (
    <ButtonStyled
      type={buttonType}
      buttonStyle={buttonStyle}
      onClick={handleClick}
    >
      {text}
    </ButtonStyled>
  );
}
