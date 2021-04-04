import React, { Component } from "react";

export default class GalleryMore extends Component {
  render() {
    return (
      <div>
        <div style={Styles.galleryMore}>
          <div style={Styles.overlay}></div>

          <div style={Styles.overlayText}>
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
            </div>
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
    background: "rgba(0,0,0,.3)",
  },
  overlayText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "white",
    fontWeight: "500",
    fontSize: "24px",
  },
};
