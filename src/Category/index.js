import React, { Component } from "react";
import CategoryList from "./components/CategoryList";
import Axios from "axios";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCat: ""
    };
  }

  getAllCategories = () => {
    Axios.get("/api/categories/list")
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getAllCategories();
  };

  deleteCat = categoryId => {
    if (window.confirm("Are you sure?")) {
      fetch("/api/categories/" + categoryId, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.getAllCategories();
      });
    }
  };

  render() {
    const { categories = [] } = this.state;

    return (
      <div>
        <CategoryList deleteCat={this.deleteCat} categories={categories} />
      </div>
    );
  }
}
export default Category;
