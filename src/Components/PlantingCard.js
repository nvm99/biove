import React, { Component } from "react";
import plantingCardImage from "../assets/campaignImage.png";

export default class PlantingCard extends Component {
  render() {
    const {
      campaignName,
      minBudget,
      progress,
      score,
      numberOfReviews,
    } = this.props;
    return (
      <div style={Styles.plantingCard}>
        <div style={Styles.plantingCardImage}>
          <img
            src={plantingCardImage}
            alt="planting card image"
            style={{ height: "100%" }}
          ></img>
          <p style={Styles.plantingCampaign}>{campaignName}</p>
        </div>
        <div style={Styles.plantingCardContent}>
          <p style={Styles.plantingDetails}>
            From <span>{minBudget}</span>/person , <span>{progress}</span>%{" "}
          </p>
          <div style={Styles.plantingLocation}>
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.41342C0 2.87799 2.87047 0 6.39665 0C9.92284 0 12.7933 2.87799 12.8 6.41342C12.8 6.81593 12.7599 7.2218 12.6863 7.61761C12.6829 7.64109 12.6695 7.71153 12.6428 7.83228C12.5457 8.26834 12.4019 8.69098 12.2145 9.09686C11.5254 10.7237 10.0065 13.2226 6.68437 15.8994C6.60073 15.9665 6.50037 16 6.4 16C6.29963 16 6.19927 15.9665 6.11563 15.8994C2.79017 13.2226 1.27465 10.7237 0.585468 9.09686C0.398118 8.69098 0.25426 8.26499 0.15724 7.83228C0.130476 7.71153 0.117094 7.64109 0.113748 7.61761C0.0368008 7.2218 0 6.81593 0 6.41342ZM11.788 7.47002C11.7888 7.46667 11.7896 7.46331 11.7896 7.45996C11.8566 7.11782 11.89 6.76562 11.89 6.41006C11.89 3.37442 9.42436 0.902306 6.39665 0.902306C3.36895 0.902306 0.903293 3.37442 0.903293 6.41006C0.903293 6.76226 0.936749 7.11111 1.00366 7.4566C1.00366 7.46214 1.00467 7.46667 1.00558 7.47073C1.00633 7.47405 1.007 7.47707 1.007 7.48008C1.00771 7.48362 1.00856 7.48864 1.00966 7.49508C1.01376 7.51924 1.02127 7.56342 1.03711 7.62432V7.63103C1.1241 8.00671 1.24788 8.37568 1.40847 8.72453C1.41014 8.7262 1.41098 8.72872 1.41181 8.73124C1.41265 8.73375 1.41349 8.73627 1.41516 8.73795C2.04077 10.2239 3.41244 12.4914 6.39665 14.9635C9.38087 12.4914 10.7525 10.2239 11.3781 8.73795C11.3798 8.73627 11.3807 8.73375 11.3815 8.73124C11.3823 8.72872 11.3832 8.72621 11.3848 8.72453C11.5488 8.37233 11.6726 8.00671 11.7562 7.63103V7.62432C11.7729 7.54717 11.783 7.49686 11.7863 7.48008C11.7863 7.47673 11.7871 7.47338 11.788 7.47002Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.4 6.40039C2.4 4.19611 4.19572 2.40039 6.4 2.40039C8.60429 2.40039 10.4 4.19611 10.4 6.40039C10.4 8.60467 8.60429 10.4004 6.4 10.4004C4.19572 10.4004 2.4 8.60467 2.4 6.40039ZM3.28962 6.40039C3.28962 8.11374 4.68336 9.51077 6.4 9.51077C8.11664 9.51077 9.51038 8.11374 9.51038 6.40039C9.51038 4.68705 8.11335 3.29001 6.4 3.29001C4.68666 3.29001 3.28962 4.68705 3.28962 6.40039Z"
                fill="#9B9B9B"
              />
            </svg>
            <p style={Styles.plantingLocationText}>
              {" "}
              51 Hill , Trang Bom, Dong Nai
            </p>
          </div>
          <div style={Styles.ratingContainer}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.77247 0.470891L10.5771 4.05545C10.7026 4.30476 10.9452 4.47751 11.2259 4.51743L15.2613 5.09228C15.9682 5.19305 16.2502 6.04437 15.7389 6.53285L12.8189 9.32302C12.616 9.51704 12.5232 9.79678 12.5712 10.0706L13.2604 14.0105C13.3813 14.7005 12.6423 15.2266 12.0102 14.9011L8.401 13.0411C8.15002 12.9118 7.84998 12.9118 7.599 13.0411L3.9898 14.9011C3.35768 15.2269 2.61875 14.7005 2.73957 14.0105L3.42877 10.0706C3.47683 9.79678 3.38404 9.51704 3.18112 9.32302L0.261124 6.53285C-0.250184 6.04404 0.0318369 5.19273 0.738724 5.09228L4.77412 4.51743C5.05481 4.47751 5.29744 4.30476 5.42293 4.05545L7.22753 0.470891C7.54326 -0.156964 8.45641 -0.156964 8.77247 0.470891Z"
                fill="#30797C"
              />
            </svg>
            <p style={Styles.rating}>
              {score}{" "}
              <span style={Styles.numberOfReviews}>({numberOfReviews})</span>
            </p>
          </div>
        </div>
        <button style={Styles.donateBtn}>Donate</button>
      </div>
    );
  }
}
const Styles = {
  plantingCard: {
    width: "356px",
    height: "469px",
    marginBottom:"30px",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    position:"relative"
  },
  plantingCardImage: {
    display: "flex",
    width: "100%",
    height: "340px",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "black",
  },
  plantingCampaign: {
    fontSize: "24px",
    fontWeight: "500",
    position: "absolute",
    left: "30px",
    bottom: "30px",
    marginBottom: "0",
    color: "white",
    width: "296px",
  },
  plantingCardContent: {
    width: "100%",
    paddingTop: "20px",
    paddingLeft: "30px",
  },
  plantingDetails: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "0",
  },
  plantingLocation: {
    display: "flex",
    alignItems: "center",
    marginTop: "13px",
  },
  plantingLocationText: {
    marginBottom: "0",
    color: "#9B9B9B",
    fontSize: "13px",
    marginLeft: "15px",
    fontWeight: "500",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "13px",
  },
  rating: {
    marginBottom: "0",
    color: "#30797C",
    fontSize: "13px",
    marginLeft: "15px",
  },
  numberOfReviews: {
    color: "#9B9B9B",
  },
  donateBtn: {
    border: "none",
    textDecoration: "none",
    width: "131px",
    height: "40px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    background: "#349497",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"5px",
    position:"absolute",
    top:"311px",
    right:"10px"
  },
};
