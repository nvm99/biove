import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header"
import Slider from "./Components/Slider"
import Introduction from "./Components/Introduction"
import Heatmap from "./Components/Heatmap";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./Components/Navbar"
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }
  setPage = (page) => {
    this.setState({ page: page })
  }
  renderPage() {
    switch (this.state.page) {
      case 'home':
        return (
          <>
            <Header></Header>
            <Slider></Slider>
            <Introduction></Introduction>
            <Heatmap></Heatmap>
            <Testimonial></Testimonial>
          </>
        )
      case 'login':
        return (
          <>
            <Login setPage={this.setPage}/>
          </>
        )
      case 'signup':
        return (
          <>
            <Signup setPage={this.setPage}/>
          </>
        )
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
      <div className="App"><div style={Styles.navbarContainer}>
        <Navbar style={Styles.navbarContainer} setPage={this.setPage}/>
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
  }
}

