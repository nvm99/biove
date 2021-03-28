import React, { Component } from "react";
import Carousel from "../Components/Carousel"

export default class Slider extends Component {
  render() {
    return (
      <div style={Styles.sliderContainer}>
        <div style={Styles.sliderTextContainer}>
          <p style={Styles.sliderTextHead}>
            THPT Chuyên Lương Thế Vinh community
          </p>
          <div style={Styles.sliderTextDescriptionContainer}>
            <p style={Styles.sliderTextDescription}>
              Với sứ mệnh là cộng dồng triển khai Biove, chúng tôi sẽ đồng hành
              với các bạn trên mọi chặng đường. Chiến dịch VN-Green đặt mục tiêu
              trồng 50.000 cây trong năm năm 2021.{" "}
            </p>
            <a style={Styles.sliderTextLink} href="#">
              Tham gia đóng góp{" "}
            </a>
          </div>
        </div>
        <Carousel></Carousel>
      </div>
    );
  }
}

const Styles = {
  sliderContainer: {
    backgroundColor: "white",
    paddingTop: "7%",
  },
  sliderTextContainer: {
    marginLeft: "9%",
    display: "flex",
    marginBottom:"40px"
  },
  sliderTextHead: {
    fontSize: "40px",
    fontWeight: "500",
    display: "block",
    width: "35%",
  },
  sliderTextDescriptionContainer: {
    width: "40%",
    marginLeft: "50px",
    marginTop: "30px",
  },
  sliderTextDescription: {
    fontSize: "18px",
    fontWeight: "500",
  },
  sliderTextLink: {
    color: "#4A90E2",
    fontSize: "18px",
    fontWeight: "500",
    marginTop:"-20px",
    display:"block",
    textDecoration:"none"
  },
};
