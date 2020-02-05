import React from "react";
import { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import { ButtonStyled } from "../../common/Button/Button.styled";

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urllist: [],
      categories: [],
      selectedCat: ""
    };
  }
  fetchUrlsBasedonCatId = categoryId => {
    Axios.get(`/api/categories/${categoryId}/urls/`)
      .then(response => {
        this.setState({ urllist: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    Axios.get("/api/categories/list")
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    this.fetchUrlsBasedonCatId(params.cat_id);
  };
  render() {
    const { urllist } = this.state;
    return (
      <form className="form">
        <div>
          <h1>List of URLs</h1>
        </div>

        <div>
          {urllist.map(u => {
            return (
              <li key={u.id}>
                {u.urlName}
                <ButtonStyled type="button" buttonStyle={"danger"}>
                  Delete
                </ButtonStyled>
                <ButtonStyled buttonStyle={"primary"}>Update</ButtonStyled>
                <hr />
              </li>
            );
          })}
        </div>
      </form>
    );
  }
}
export default withRouter(BookmarkList);
