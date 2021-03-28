import React, { Component } from "react";
import heatmap from "../assets/heatmap.png";
import videoThumbnail from "../assets/videoThumbnail.png";
export default class Heatmap extends Component {
  render() {
    return (
      <div>
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
          <p style={Styles.heatmapAchievementText}>OUR ACHIEVEMENT</p>
          <div style={Styles.heatmapStatisticContainer}>
            <div style={Styles.heatmapStatisticItem}>
              <p style={Styles.heatmapStatisticTitle}>Community/ Organize</p>
              <p style={Styles.heatmapStatisticDetail}>68+</p>
            </div>
            <div style={Styles.heatmapStatisticItem}>
              <p style={Styles.heatmapStatisticTitle}>Tree</p>
              <p style={Styles.heatmapStatisticDetail}>102+</p>
            </div>
            <div style={Styles.heatmapStatisticItem}>
              <p style={Styles.heatmapStatisticTitle}>Campaign</p>
              <p style={Styles.heatmapStatisticDetail}>84+</p>
            </div>
            <div style={Styles.heatmapStatisticItem}>
              <p style={Styles.heatmapStatisticTitle}>Funding</p>
              <p style={Styles.heatmapStatisticDetail}>35 mil</p>
            </div>
          </div>
        </div>
        <div style={Styles.videoThumbnailContainer}>
          <img
            src={videoThumbnail}
            style={Styles.videoThumbnailStyle}
            alt="video thumbnail"
          ></img>

          <a href="#" style={Styles.actionIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="white"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </a>
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
  heatmapImageContainer: {
    width: "100%",
    height: "800px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heatmapImageStyle: {
    width: "100%",
    display: "block",
  },
  heatmapAchievementText: {
    fontSize: "24px",
    fontWeight: "500",
    marginTop: "7%",
    marginBottom: "7%",
  },
  heatmapStatisticContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heatmapStatisticTitle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#9B9B9B",
  },
  heatmapStatisticDetail: {
    fontSize: "70px",
    fontWeight: "500",
    color: "9B9B9B",
  },
  videoThumbnailStyle: {
    width: "100%",
    marginTop: "7%",
  },
  videoThumbnailContainer:{
    position:"relative"
  },
  actionIcon: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "0",
    left:"50%",
    transform:"translate(-50%,-50%)"
  },
};
