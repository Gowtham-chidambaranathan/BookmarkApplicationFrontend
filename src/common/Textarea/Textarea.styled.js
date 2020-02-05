import styled, { css } from "styled-components";
export const TextareaStyled = styled.textarea`
  font-size: small;

  ${props =>
    props.buttonType === "small" &&
    css`
      height: 50px;
    `}

  ${props =>
    props.buttonType === "large" &&
    css`
      height: 100px;
    `}
`;
