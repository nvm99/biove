import React, { Component } from "react";
import plantingCardImage from "../assets/campaignImage.png";

export default class PlantingCard extends Component {
  render() {
    const { campaignName } = this.props;
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

        </div>
      </div>
    );
  }
}
const Styles = {
  plantingCard: {},
  plantingCardImage: {
    display: "flex",
    width: "356px",
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
    left:"30px",
    bottom:"30px",
    marginBottom:"0",
    color: "white",
    width: "296px",
  },
  plantingCardContent:{
    width: "356px",
    height: "130px",
    background: "#C7C2C2",
    padding: "15px 25px",
    
  }
};
