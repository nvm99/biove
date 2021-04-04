import React, { Component } from "react";


export default class GalleryItemLong extends Component {
  renderOverlayText = (page, title, subTitle) => {
    if (page === 0) {
      return (
        <div style={Styles.overlayTextCommunity}>
          <p style={{ marginBottom: "0" }}>{title}</p>
        </div>
      );
    }
    return (
      <div style={Styles.overlayTextCampaign}>
        <p style={{ marginBottom: "0", fontSize: "39px", fontWeight: "500" }}>
          {title}
        </p>
        <p style={{ marginBottom: "0", fontSize: "25px", fontWeight: "500" }}>
          {subTitle}
        </p>
      </div>
    );
  };
  render() {
    const { page, title, subTitle, image, handleClick } = this.props;
    const overlayText = this.renderOverlayText(page, title, subTitle);
    return (
      <div onClick={handleClick} style={Styles.galleryItemLong}>
        <div style={Styles.overlay}></div>
        <img src={image} alt="long image" style={{ width: "100%" }}></img>
        {overlayText}
      </div>
    );
  }
}
const Styles = {
  galleryItemLong: {
    width: "732px",
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
    background: "rgba(0,0,0,.2)",
  },
  overlayTextCommunity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "white",
    fontWeight: "500",
    fontSize: "39px",
    cursor: "pointer",
  },
  overlayTextCampaign: {
    position: "absolute",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    bottom: "30px",
    right: "76px",
  },
};
