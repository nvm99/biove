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
import BioveAngel from "./pages/BioveAngel";


class App extends Component {
  
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
        case "angel":
        return (
          <>
            <BioveAngel/>
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
            this.props.location.pathname == "/" || this.props.location.pathname == "/planting" || this.props.location.pathname == "/angel"
              ? { width: "100%", position: "absolute", zIndex: "10" }
              : Styles.navbarContainer
          }
        >
          <Navbar pathName={this.props.location.pathname}/>
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
          <Route
            exact
            path="/angel"
            render={() => this.renderPage("angel")}
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
