import React, { Component } from "react";
import heatmap from "../assets/heatmap.png";
export default class Heatmap extends Component {
  render() {
    return (
      <div style={Styles.heatmapContainer}>
        <p style={Styles.heatmapTitle}>BIOVE HEATMAP</p>
        <p style={Styles.heatmapHead}> Cùng xem những dấu ấn của Biove </p>
        <div style={Styles.heatmapImageContainer}>
          <img
            src={heatmap}
            alt="heatmap image"
            style={Styles.heatmapImageStyle}
          />
        </div>
      </div>
    );
  }
}

const Styles = {
  heatmapContainer: {
    marginTop: "80px",
    marginLeft: "125px",
    marginRight: "125px",
  },
  heatmapTitle: {
    color: "#707070",
    fontSize: "30px",
    fontWeight: "500",
  },
  heatmapHead: {
    display: "block",
    color: "black",
    fontSize: "70px",
    fontWeight: "500",
    width: "700px",
  },
  heatmapImageContainer:{
      width:"100%",
      height:"800px",
      overflow:"hidden",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"

  },
  heatmapImageStyle:{
    width:"100%",
    display:"block"
  }
};
