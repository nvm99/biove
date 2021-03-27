import React, { Component } from "react";
import carouselImage from "../assets/carouselImage.png";

export default class Carousel extends Component {
  render() {
    return (
      <div style={Styles.carouselContainer}>
        <div style={Styles.carouselImageContainer}>
          <img
            src={carouselImage}
            alt="carousel item 1"
            style={Styles.carouselImageStyle}
          />
          <img
            src={carouselImage}
            alt="carousel item 2"
            style={Styles.carouselImageStyle}
          />
          <img
            src={carouselImage}
            alt="carousel item 3"
            style={Styles.carouselImageStyle}
          />
        </div>
        <div style={Styles.carouselIndicatorContainer}>
            <div style={Styles.carouselIndicatorActive}></div>
            <div style={{...Styles.carouselIndicatorInactive,...Styles.marginLeftMed}}></div>
            <div style={{...Styles.carouselIndicatorInactive,...Styles.marginLeftMed}}></div>
        </div>
        <div style={Styles.carouselNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="#4A4A4A"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
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
  carouselContainer: {
    position:"relative"
  },
  carouselImageContainer: {
    height: "475px",
    display: "flex",
    marginLeft: "125px",
    overflowX:'hidden'
  },
  carouselNavigation: {
    width: "100px",
    height: "60px",
    backgroundColor: "#DBAEAE",
    position:"absolute",
    bottom:"220px",
    marginLeft: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselNavigationSeparator:{
    width: "40px",
    height: "1px",
    backgroundColor: "#D8D8D8",
    transform: "rotate(-70deg)",
  },
  carouselImageStyle: {
    height: "100%",
    marginRight: "20px",
  },
  carouselIndicatorContainer:{
    marginTop:"20px",
    marginLeft:"125px",
    display:"flex",
    alignItems:"center"
  },
  carouselIndicatorActive:{
      backgroundColor:"#FF5200",
      width:"25px",
      height:"10px",
      borderRadius:"5px"
  },
  carouselIndicatorInactive:{
    backgroundColor:"#D8D8D8",
    width:"10px",
    height:"10px",
    borderRadius:"50%",
  },
  marginLeftMed:{
      marginLeft:"10px"
  }
};
