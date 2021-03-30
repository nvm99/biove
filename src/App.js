import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Introduction from "./Components/Introduction";
import Heatmap from "./Components/Heatmap";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Profile from "./pages/Profile";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }
  setPage = (page) => {
    this.setState({ page: page });
  };
  renderPage() {
    switch (this.state.page) {
      case "home":
        return (
          <>
            <Profile></Profile>
            {/* <Header></Header>
            <Slider></Slider>
            <Introduction></Introduction>
            <Heatmap></Heatmap>
            <Testimonial></Testimonial> */}
          </>
        );
      case "login":
        return (
          <>
            <Login setPage={this.setPage} />
          </>
        );
      case "signup":
        return (
          <>
            <Signup setPage={this.setPage} />
          </>
        );
      default:
        <>
          <Header></Header>
          <Slider></Slider>
          <Introduction></Introduction>
          <Heatmap></Heatmap>
          <Testimonial></Testimonial>
        </>;
    }
  }
  render() {
    return (
      <div className="App">
        <div
          style={
            // this.state.page == "home"
            //   ? { width: "100%", position: "absolute", zIndex: "10" }
            //   : Styles.navbarContainer
            Styles.navbarContainer
          }
        >
          <Navbar setPage={this.setPage} />
        </div>
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}
const Styles = {
  navbarContainer: {
    width: "100%",
    backgroundColor: "#3A3232",
  },
};
