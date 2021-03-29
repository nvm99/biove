import React, { Component } from "react";
import carouselImage from "../assets/carouselImage.png";
import carouselImage2 from "../assets/carouselImage2.png";
import Flickity from "react-flickity-component";


export default class Carousel extends Component {
  rightNavBtn
  leftNavBtn
  componentDidMount=()=>{
    this.rightNavBtn=document.querySelector(".next")
    this.leftNavBtn=document.querySelector(".previous")
    
  }
  handleRightNavBtnClick=()=>{
    this.rightNavBtn.click()
  }
  handleLeftNavBtnClick=()=>{
    this.leftNavBtn.click()
  }
  render() {
    return (
      <div className="carouselContainer">
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={{ wrapAround: true }} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="carousel-cell">
            <img src={carouselImage} alt="carousel item 1" />
          </div>
          <div className="carousel-cell">
            <img src={carouselImage2} alt="carousel item 2" />
          </div>
          <div className="carousel-cell">
            <img src={carouselImage} alt="carousel item 1" />
          </div>
        </Flickity>
        <div style={Styles.carouselNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="#4A4A4A"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            onClick={this.handleLeftNavBtnClick}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <div style={Styles.carouselNavigationSeparator}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="#4A4A4A"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
            onClick={this.handleRightNavBtnClick}
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
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
