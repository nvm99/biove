import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Profile from "./pages/Profile";
import { withRouter, Route, Switch } from "react-router-dom";
import Planting from "./pages/Planting";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "/" };
  }
  renderNavbar = () => {
    if (this.state.pathname !== this.props.location.pathname) {
      this.setState({
        pathname: this.props.location.pathname,
      });
    }
  };
  componentDidMount = () => {
    this.renderNavbar();
  };
  componentDidUpdate = () => {
    this.renderNavbar();
  };
  renderPage = (page) => {
    switch (page) {
      case "home":
        return (
          <>
            <Home />
          </>
        );
      case "login":
        return (
          <>
            <Login />
          </>
        );
      case "signup":
        return (
          <>
            <Signup />
          </>
        );
      case "profile":
        return (
          <>
            <Profile />
          </>
        );
      case "planting":
        return (
          <>
            <Planting/>
          </>
        );
      case "profile":
        return (
          <>
            <Profile/>
          </>
        );
      default:
        <>
          <Home />
        </>;
    }
  };

  render() {
    return (
      <div className="App">
        <div
          style={
            // neu path la home thi su dung navbar home
            this.state.pathname == "/" || this.state.pathname == "/planting"
              ? { width: "100%", position: "absolute", zIndex: "10" }
              : Styles.navbarContainer
          }
        >
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" render={() => this.renderPage("home")}></Route>
          <Route
            exact
            path="/login"
            render={() => this.renderPage("login")}
          ></Route>
          <Route
            exact
            path="/profile"
            render={() => this.renderPage("profile")}
          ></Route>
          <Route
            exact
            path="/signup"
            render={() => this.renderPage("signup")}
          ></Route>
          <Route
            exact
            path="/planting"
            render={() => this.renderPage("planting")}
          ></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);
const Styles = {
  navbarContainer: {
    width: "100%",
    backgroundColor: "#3A3232",
  },
};
