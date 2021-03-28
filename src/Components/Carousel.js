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
    display: "flex",
    marginLeft: "9%",
    overflowX:'hidden'
  },
  carouselNavigation: {
    width: "7.2%",
    height: "10%",
    backgroundColor: "#DBAEAE",
    position:"absolute",
    top:"50%",
    transform:"translate(0,-50%)",
    marginLeft:".9%",
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
    width: "70%",
    marginRight: "2%",
  },
  carouselIndicatorContainer:{
    marginTop:"20px",
    marginLeft:"9%",
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
