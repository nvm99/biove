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
import Payment from "./pages/Payment";
import HeatmapPage from "./pages/HeatmapPage"
import About from "./pages/About"


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
        case "payment":
        return (
          <>
            <Payment/>
          </>
        );
        case "heatmap":
        return (
          <>
            <HeatmapPage/>
          </>
        );
        case "about":
        return (
          <>
            <About/>
          </>
        );
      default:
        <>
          <Home />
        </>;
    }
  };

  render() {
    const {pathname}=this.props.location
    return (
      <div className="App">
        <div
          style={
            // neu path la home thi su dung navbar home
            pathname == "/" || pathname == "/planting" || pathname == "/angel" || pathname =="/payment" || pathname =="/heatmap" || pathname=="/about"
              ? { width: "100%", position: "absolute", zIndex: "10" }
              : Styles.navbarContainer
          }
        >
          <Navbar pathName={pathname}/>
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
          <Route
            exact
            path="/payment"
            render={() => this.renderPage("payment")}
          ></Route>
          <Route
            exact
            path="/heatmap"
            render={() => this.renderPage("heatmap")}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => this.renderPage("about")}
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
