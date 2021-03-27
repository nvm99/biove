import React, { Component } from "react";
import introductionImage1 from "../assets/introductionImage1.png";
import introductionImage2 from "../assets/introductionImage2.png";

export default class Introduction extends Component {
  render() {
    return (
      <div style={Styles.introductionContainer}>
        <p style={Styles.introductionTitle}>Giới thiệu</p>
        <p style={Styles.introductionHead}> BIOVE mang sứ mệnh tiên phong </p>
        <div style={Styles.introductionDescriptionContainer}>
          <div style={{...Styles.introductionDescriptionItem,...Styles.marginRightMed}}>
            <div style={{ height: "220px" }}>
              <p style={Styles.introductionDescriptionText}>
                Với sứ mệnh là cộng dồng triển khai Biove, chúng tôi sẽ đồng
                hành với các bạn trên mọi chặng đường. Chiến dịch VN-Green đặt
                mục tiêu trồng 50.000 cây trong năm năm 2021.{" "}
              </p>
              <a href="#" style={Styles.introductionDescriptionLink}>
                Tham gia đóng góp
              </a>
            </div>

            <div style={Styles.introductionDescriptionImageContainer}>
              <img
                src={introductionImage1}
                alt="introduction image 1"
                style={Styles.introductionImageStyle}
              ></img>
              <a href="#" style={Styles.introductionButton}>
                <p style={Styles.introductionButtonText}>Link to báo Đồng Nai...</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div style={Styles.introductionDescriptionItem}>
            <div style={{ height: "220px" }}>
              <p style={Styles.introductionDescriptionText}>
                Chặng đường, mục tiêu xã hội,… của BIOVE Với sứ mệnh là cộng
                dồng triển khai Biove, chúng tôi sẽ đồng hành với các bạn trên
                mọi chặng đường. Chiến dịch VN-Green đặt mục tiêu trồng 50.000
                cây trong năm năm 2021.{" "}
              </p>
              <a href="#" style={Styles.introductionDescriptionLink}>
                Tham gia đóng góp
              </a>
            </div>
            <div style={Styles.introductionDescriptionImageContainer}>
              <img
                src={introductionImage2}
                alt="introduction image 2"
                style={Styles.introductionImageStyle}
              ></img>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

const Styles = {
  introductionContainer: {
    marginTop: "80px",
    marginLeft: "125px",
    marginRight:"125px"
  },
  introductionTitle: {
    color: "#707070",
    fontSize: "30px",
    fontWeight: "500",
  },
  introductionHead: {
    display: "block",
    color: "black",
    fontSize: "70px",
    fontWeight: "500",
    width: "700px",
  },
  introductionDescriptionContainer: {
    marginTop: "50px",
    display: "flex",
  },
  introductionDescriptionItem: {
    width: "100%",
  },
  introductionDescriptionText: {
    fontSize: "18px",
    fontWeight: "500",
    
  },
  introductionDescriptionLink: {
    color: "#4A90E2",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "-10px",
    display: "block",
    textDecoration: "none",
  },
  introductionDescriptionImageContainer: {
    height: "400px",
    backgroundColor: "#DEDEDE",
    overflow: "hidden",
    position:"relative"
  },
  introductionImageStyle: {
    width: "100%",
  },
  introductionButton:{
      backgroundColor:"white",
      width:"230px",
      height:"60px",
      position:"absolute",
      right:"0",
      bottom:"0",
      textDecoration:"none",
      color:"#FF5200",
      fontSize:"14px",
      fontWeight:"500",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    
  },
  introductionButtonText:{
    marginBottom:"0",
    marginRight:"10px"
  },
  marginRightMed:{
    marginRight:"15px"
  }
};
