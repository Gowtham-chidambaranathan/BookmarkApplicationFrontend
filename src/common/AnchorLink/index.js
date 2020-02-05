import React from "react";
import { Link } from "react-router-dom";
import { AnchorLinkStyled } from "./AnchorLink.styled";

export default function AnchorLink({ link = "#", linkText = "link" }) {
  return (
    <AnchorLinkStyled>
      <Link to={link}>{linkText}</Link>
    </AnchorLinkStyled>
  );
}
