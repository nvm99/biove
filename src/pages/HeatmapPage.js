import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import heatmap from "../../src/assets/heatmap.png";
export default class HeatmapPage extends Component {
  render() {
    return (
      <div style={Styles.heatmapPageContainer}>
        <div style={Styles.sideHeroImage}></div>
        <p style={Styles.title}>Ghi dấu chiến dịch bạn vào heatmap của chúng tôi</p>

        <img
          src={heatmap}
          alt="heatmap image"
          
        />
      </div>
    );
  }
}
const Styles = {
  sideHeroImage: {
    width: "100vw",
    height: "calc(100vw*469/1440)",
    left: "0",
    right: "0",
    top: "0",
    zIndex: "-1",
    backgroundImage: `url(${sideHeroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  heatmapPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom:"150px"
  },
  title:{
      fontSize:"36px",
      fontWeight:"500",
      color:"#30797C",
      marginTop:"40px",
      marginBottom:"55px"
  }
};
