import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";

export default class Planting extends Component {
  render() {
    return (
      <div>
        <div style={Styles.sideHeroImage}>
          <p style={Styles.sideHeroText}>Go green your home</p>
        </div>
        <div style={Styles.sideNav}>
          <a href="#" style={Styles.sideNavLink}>
            FARMS
          </a>
          <a href="#" style={Styles.sideNavLink}>
            CAMPAIGN
          </a>
          <a href="#" style={Styles.sideNavLink}>
            COMMUNITY
          </a>
          <a href="#" style={Styles.sideNavLink}>
            TREES
          </a>
        </div>
        <div style={Styles.plantingContent}>
          <div style={Styles.plantingDisplay}>
            <p style={Styles.plantingDisplayText}>
              PLANTING AT WHEREVER YOU WANT
            </p>
            <div style={Styles.plantingDisplayCardContainer}></div>
          </div>
          <div style={Styles.plantingFilter}></div>
        </div>
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
  sideHeroText: {
    fontSize: "32px",
    fontWeight: "300",
    color: "white",
    marginBottom: "0",
    position: "absolute",
    top: "207px",
    left: "166px",
  },
  sideNav: {
    marginLeft: "6%",
    width: "1074.5px",
    marginTop: "76px",
    height: "58px",
    backgroundColor: "#01A78E",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sideNavLink: {
    marginBottom: "0",
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
  },
  plantingDisplay: {
    marginLeft: "7%",
    width: "672px",
    marginTop: "56px",
  },
  plantingDisplayText: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500",
  },
  plantingDisplayCardContainer: {
    backgroundColor: "#AEAEAE",
    height: "800px",
  },
};

/* Overlay */

/* Overlay */
