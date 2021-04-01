import React, { Component } from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import Introduction from "../Components/Introduction";
import Heatmap from "../Components/Heatmap";
import Testimonial from "../Components/Testimonial";
import {withRouter} from "react-router-dom"

 class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <Introduction></Introduction>
        <Heatmap></Heatmap>
        <Testimonial></Testimonial>
      </div>
    );
  }
}
export default Home