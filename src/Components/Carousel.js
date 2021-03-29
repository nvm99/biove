import React, { Component } from "react";
import carouselImage from "../assets/carouselImage.png";
import carouselImage2 from "../assets/carouselImage2.png";

export default class Carousel extends Component {
  render() {
    return (
      
      <div className="carouselContainer">
        <div className="carousel" data-flickity='{ "wrapAround": true }'>
          <div className="carousel-cell">
            <img src={carouselImage} alt="carousel item 1" />
          </div>
          <div className="carousel-cell"><img src={carouselImage2} alt="carousel item 2" /></div>
          <div className="carousel-cell"><img src={carouselImage} alt="carousel item 1" /></div>
        </div>
        <div style={Styles.carouselNavigation}>
          <div style={Styles.carouselNavigationSeparator}></div>
        </div>
      </div>
      
    );
  }
}

const Styles = {
  carouselNavigation: {
    width: "7.2%",
    height: "10%",
    backgroundColor: "#DBAEAE",
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    marginLeft: ".9%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "0",
  },
  carouselNavigationSeparator: {
    width: "40px",
    height: "1px",
    backgroundColor: "#D8D8D8",
    transform: "rotate(-70deg)",
  },
};
