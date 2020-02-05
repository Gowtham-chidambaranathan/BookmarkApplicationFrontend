import React from "react";
import TextArea from "../../common/Textarea";
import TextField from "../../common/TextField";
import { Button } from "react-bootstrap";
import { CategoryFormStyled } from "./Category.styled";
import Axios from "axios";

export default class CreateCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      categoryDescription: "",
      catError: "",
      descError: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let catError = "";
    let descError = "";
    if (!this.state.categoryDescription.length) {
      descError = "Description cannot be blank!";
    }
    if (!this.state.categoryName.length) {
      catError = "Category cannot be blank!";
    }
    if (catError || descError) {
      this.setState({ catError, descError });
      return false;
    }
    return true;
  };
  submitHandler = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      Axios.post("/api/categories/", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      alert("Created");
      console.log(this.state);
    } else {
      alert("Cannot be created");
    }
  };
  render() {
    return (
      <CategoryFormStyled>
        <form onSubmit={this.submitHandler}>
          <TextField
            name="categoryName"
            handleChange={this.handleChange}
            label="Category Name"
            placeholder="Enter the category Name.."
          />
          <div>
            {this.state.catError ? (
              <div style={{ color: "red" }}>{this.state.catError}</div>
            ) : null}
          </div>
          <TextArea
            name="categoryDescription"
            placeholder="Enter the description"
            handleChange={this.handleChange}
            label="Category Description"
          />
          <div>
            {this.state.descError ? (
              <div style={{ color: "red" }}>{this.state.descError}</div>
            ) : null}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CategoryFormStyled>
    );
  }
}
