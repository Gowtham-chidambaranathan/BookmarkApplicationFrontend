import React from "react";
import TextField from "../../common/TextField";
import { CategoryFormStyled } from "../../Category/components/Category.styled";
import { withRouter } from "react-router-dom";
import { ButtonStyled } from "../../common/Button/Button.styled";
import Axios from "axios";
import Dropdown from "../../common/Dropdown";

class CreateBookmark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlName: "",
      selectedCat: "",
      categoryId: "",
      categories: []
    };
  }

  componentDidMount() {
    Axios.get("/api/categories/list")
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    Axios.post(`/api/urls/${this.state.selectedCat}`, {
      urlName: this.state.urlName
    })
      .then(response => {
        this.props.history.push(`/bookmark-list/${this.state.selectedCat}`);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <CategoryFormStyled>
        <form
          onSubmit={e => {
            this.submitHandler(e);
          }}
        >
          <TextField
            handleChange={this.handleChange}
            name="urlName"
            label="URL Name"
            placeholder="Enter the URL Name"
          />
          <Dropdown
            handleChange={e => {
              this.setState({ selectedCat: e.target.value });
            }}
            options={this.state.categories.map(cat => ({
              value: cat.categoryId,
              text: cat.categoryName
            }))}
          />

          <ButtonStyled type="submit" buttonStyle="primary">
            Submit
          </ButtonStyled>
        </form>
      </CategoryFormStyled>
    );
  }
}
export default withRouter(CreateBookmark);
