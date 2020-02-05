import React from "react";
import Axios from "axios";
import "./HomePage.css";
// import Textarea from "../common/Textarea/Textarea";
import Dropdown from "../common/Dropdown";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlName: "",
      selectedCat: "",
      categories: []
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    Axios.post(`/api/urls/createUrl/${this.state.selectedCat}`, {
      urlName: this.state.urlName
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleCatChange = e => {
    this.setState({
      selectedCat: e.target.value
    });
  };

  componentDidMount() {
    Axios.get("/api/category/all")
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { categories = [], selectedCat } = this.state;

    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
            this.props.history.push(`/urls/${selectedCat}`);
          }}
        >
          {/* <Textarea
            handleOnChange={e => {
              this.setState({
                urlName: e.target.value
              });
            }}
            urlName={this.state.urlName}
          /> */}
          <Dropdown
            categories={categories}
            handleChange={this.handleCatChange}
            categoryId={selectedCat}
          />

          <div>
            <button class="bb1">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default HomePage;
