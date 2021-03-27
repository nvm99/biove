import React, { Component } from "react";
import landing from "../../src/assets/landing.png";
import Navbar from "../Components/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.imageContainer}>
          <img style={Styles.landingImage} src={landing} alt="landing image" />
        </div>

        <Navbar></Navbar>
        <div style={Styles.headerText}>
          <p style={Styles.headerTextFirst}>Welcome to BIOVE foundation</p>
          <p style={Styles.headerTextSecond}>
            Plant more trees to benefit another generation
          </p>
        </div>
        <div style={Styles.actionContainer}>
          <a href="#" style={Styles.actionText}>
            Go Planting
          </a>
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
        <div style={Styles.navbarSecondary}>
          <div style={Styles.navbarSecondaryItem}>
            <p style={Styles.navbarSecondaryItemText}>CHECK OUT</p>
            <a href="#" style={Styles.navbarSecondaryItemLink}>
              Top Campaign
            </a>
          </div>
          <div style={Styles.navbarSecondarySeparator}></div>
          <div style={Styles.navbarSecondaryItem}>
            <p style={Styles.navbarSecondaryItemText}>CHECK OUT</p>
            <a href="#" style={Styles.navbarSecondaryItemLink}>
              Top Biove Planter
            </a>
          </div>
          <div style={Styles.navbarSecondarySeparator}></div>
          <div style={Styles.navbarSecondaryItem}>
            <p style={Styles.navbarSecondaryItemText}>CHECK OUT</p>
            <a href="#" style={Styles.navbarSecondaryItemLink}>
              Monthly heros
            </a>
          </div>
          <div style={Styles.navbarSecondarySeparator}></div>
          <div style={Styles.navbarSecondaryItem}>
            <p style={Styles.navbarSecondaryItemText}>CHECK OUT</p>
            <a href="#" style={Styles.navbarSecondaryItemLink}>
              Top planting moment
            </a>
          </div>
        </div>

        
      </div>
    );
  }
}

const Styles = {
  imageContainer: {
    overflowX: "hidden",
    width: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  landingImage: {
    width: "120%",
  },
  headerText: {
    color: "white",
    marginLeft: "140px",
    marginTop: "80px",
    width: "650px",
  },
  headerTextFirst: {
    fontSize: "24px",
    fontWeight: "500",
  },
  headerTextSecond: {
    fontSize: "60px",
    fontWeight: "500",
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
    marginLeft: "125px",
  },
  actionText: {
    color: "white",
    display: "block",
    fontSize: "40px",
    fontWeight: "500",
    textDecoration: "none",
    marginRight: "25px",
  },
  actionIcon: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarSecondary: {
    marginRight:"125px",
    height: "120px",
    backgroundColor: "white",
    marginTop: "80px",
    borderTopRightRadius: "20px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "125px",
  },

  navbarSecondaryItemText: {
    fontSize: "14px",
    color: "#9B9B9B",
    marginBottom: "10px",
  },
  navbarSecondaryItemLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
  },
  navbarSecondarySeparator: {
    width: "70px",
    height: "1px",
    backgroundColor: "#D8D8D8",
    transform: "rotate(-70deg)",
    marginLeft: "60px",
    marginRight: "30px",
  },
};
