import React, { Component } from "react";
import Carousel from "../Components/Carousel"

export default class RushCampaignSlider extends Component {
  render() {
    return (
      <div style={Styles.sliderContainer}>
        <p style={Styles.sliderTitle}>RUSH CAMPAIGN</p>
        <div style={Styles.sliderTextContainer}>
          <p style={Styles.sliderTextHead}>
          Cùng nhau về đích
          </p>
          <div style={Styles.sliderTextDescriptionContainer}>
            <p style={Styles.sliderTextDescription}>
            Những campaign đạt trên 90% sẽ nằm ở đây , để mọi thứ dễ done từng campaign một
            </p>
            
          </div>
        </div>
        <Carousel></Carousel>
      </div>
    );
  }
}

const Styles = {
  sliderContainer: {
    paddingTop: "7%",
    paddingBottom: "7%"
  },
  sliderTitle:{
    marginLeft: "9%",
    fontSize:"29px",
    fontWeight:"500",
    color:"#030303"
  },
  sliderTextContainer: {
    marginLeft: "9%",
    display: "flex",
    marginBottom:"40px"
  },
  sliderTextHead: {
    fontSize: "50px",
    fontWeight: "500",
    display: "block",
    width: "35%",
  },
  sliderTextDescriptionContainer: {
    width: "40%",
    marginLeft: "50px",
    marginTop: "30px",
  },
  sliderTextDescription: {
    fontSize: "18px",
    fontWeight: "500",
  },
  sliderTextLink: {
    color: "#4A90E2",
    fontSize: "18px",
    fontWeight: "500",
    marginTop:"-20px",
    display:"block",
    textDecoration:"none"
  },
};
