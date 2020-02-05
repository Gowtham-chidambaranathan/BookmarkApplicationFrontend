import React, { Component } from "react";
import BookmarkList from "./components/BookmarkList";
import { BookmarkStyled } from "./styles/Bookmark.styled";

export default class Bookmark extends Component {
  componentDidMount() {}
  render() {
    return (
      <BookmarkStyled>
        <BookmarkList />
      </BookmarkStyled>
    );
  }
}
