import React, { Component } from "react";
import Toolbar from "./common/Toolbar/Toolbar";
import SideDrawer from "./common/Toolbar/SideDrawer/SideDrawer";
import Backdrop from "./common/Backdrop/Backdrop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateCategory from "./Category/components/CreateCategory";
import CreateBookmark from "./Bookmark/components/CreateBookmark";
import Category from "./Category";
import BookmarkList from "./Bookmark/components/BookmarkList";

class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.SideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <div style={{ marginTop: 60 }}>
            <Switch>
              <Route path="/" exact component={CreateBookmark} />
              <Route path="/categories" exact component={CreateCategory} />
              <Route
                path="/bookmark-list/:cat_id"
                exact
                component={BookmarkList}
              />
              <Route path="/category-list" exact component={Category} />
            </Switch>
          </div>
          <main style={{ marginTop: "64px" }}></main>
        </div>
      </Router>
    );
  }
}

export default App;
