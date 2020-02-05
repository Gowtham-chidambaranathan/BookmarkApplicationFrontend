import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  height: 50px;
  width: 100px;
  align-content: center;
  color: black;
  ${props =>
    props.buttonStyle === "primary" &&
    css`
      background: #521751;
      color: white;
    `}

  ${props =>
    props.buttonStyle === "danger" &&
    css`
      background: red;
      color: white;
    `}
    ${props =>
      props.buttonStyle === "add" &&
      css`
        background: #521751;
        color: white;
        display: flex;
        height: 50px;
        width: 50px;
        margin-left: 1600px;
      `} 
`;
