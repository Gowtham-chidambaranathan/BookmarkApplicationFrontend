import React from "react";
import { ButtonStyled } from "../../common/Button/Button.styled";
import { AnchorLinkStyled } from "../../common/AnchorLink/AnchorLink.styled";
import { Link } from "react-router-dom";

export default function CategoryList({ categories = [], deleteCat }) {
  return (
    <div>
      <h1>LIST OF CATEGORIES</h1>

      {categories.length ? (
        categories.map(category => (
          <div key={category.categoryId}>
            <hr />
            <li>{category.categoryName}</li>
            <ButtonStyled
              type="button"
              buttonStyle={"danger"}
              onClick={() => {
                deleteCat(category.categoryId);
              }}
            >
              Delete
            </ButtonStyled>

            <ButtonStyled buttonStyle={"primary"}>Update</ButtonStyled>
          </div>
        ))
      ) : (
        <div style={{ color: "red" }}>
          <hr />
          -----------------------------------------There are no
          categories!----------------------------------------
        </div>
      )}

      <ButtonStyled type="button" buttonStyle="add">
        <AnchorLinkStyled>
          <Link to="/categories">Add</Link>
        </AnchorLinkStyled>
      </ButtonStyled>
    </div>
  );
}
