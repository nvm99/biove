import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import TreeCarousel from "../Components/TreeCarousel";

export default class Tree extends Component {
  render() {
    return (
      <div>
        <div style={Styles.sideHeroImage}>
          <p style={Styles.sideHeroText}>
            Chúng tôi trân trọng sự đồng hành của các bạn{" "}
          </p>
        </div>
        <div style={Styles.sideNav}>
          <p style={Styles.contactTitle}>CỘNG ĐỒNG LƯƠNG THẾ VINH</p>
          <div style={Styles.separator}></div>
          <p
            style={{
              width: "291px",

              fontSize: "17px",
              color: "#060407",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Chiến dịch mùa hè xanh 2020 chặng 1
          </p>
          <div style={Styles.separator}></div>
          <p
            style={{
              width: "291px",

              fontSize: "17px",
              color: "#060407",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Mã cây : 2021/1/003
          </p>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "40px",
            overflow: "hidden",
          }}
        >
          <TreeCarousel></TreeCarousel>
          <div style={Styles.recentPosts}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>Recent posts</p>
          </div>
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
    fontWeight: "500",
    color: "white",
    marginBottom: "0",
    position: "absolute",
    top: "200px",
    left: "165px",
  },
  sideNav: {
    marginLeft: "6%",
    width: "1126px",
    marginTop: "27px",
    height: "120px",
    backgroundColor: "#D1BDBD",
    borderRadius: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactTitle: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#110D13",
    marginBottom: "0",
    marginLeft: "56px",
    width: "368px",
  },
  separator: {
    width: "70px",
    height: "1px",
    background: "black",
    transform: "rotate(-70deg)",
    marginLeft: "30px",
    marginRight: "10px",
  },
  recentPosts: {
    position: "absolute",
    width: "537px",
    height: "475px",
    backgroundColor: "white",
    top: "0",
    right: "0",
    paddingLeft: "25px",
  },
};
