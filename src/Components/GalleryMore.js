import React, { Component } from "react";
import shortImage from "../assets/shortItem.png";

export default class GalleryMore extends Component {
  render() {
    return (
      <div>
        <div style={Styles.galleryMore}>
          <div style={Styles.overlay}></div>
          <img
            src={shortImage}
            alt="short image"
            style={{ height: "100%" }}
          ></img>
          <div style={Styles.overlayText}>
            <svg
              width="68"
              height="63"
              viewBox="0 0 68 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.7532 1.05987L26.4297 55.5221L3.94424 32.1906C2.89999 31.1039 1.36761 31.3275 0.532204 32.682C-0.305626 34.0427 -0.135632 36.024 0.91105 37.1108L25.196 62.3102C25.6428 62.7732 26.1795 63 26.7138 63C27.3841 63 28.0519 62.6409 28.5303 61.9416L67.3862 5.24297C68.2775 3.9452 68.1877 1.9513 67.1847 0.798427C66.1793 -0.360746 64.6469 -0.244199 63.7532 1.05987Z"
                fill="white"
              />
            </svg>

            <p style={{ marginBottom: "0",marginTop:"10px" }}>MORE</p>
          </div>
        </div>
      </div>
    );
  }
}
const Styles = {
  galleryMore: {
    width: "356px",
    height: "250px",
    backgroundColor: "#CECECE",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    background: "rgba(255, 82, 0, 0.7)",
  },
  overlayText: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "white",
    fontWeight: "500",
    fontSize: "24px",
    
  },
};
