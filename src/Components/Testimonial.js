import React, { Component } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";

export default class Testimonial extends Component {
  render() {
    return (
      <div style={Styles.testimonialContainer}>
        <div style={Styles.testimonialContainerLeft}>
          <p style={Styles.testimonialTitle}>TESTIMONIALS</p>
          <p style={Styles.testimonialHead}>Viết về BIOVE</p>
          <div style={Styles.testimonialNavigation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="#4A4A4A"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <div style={Styles.testimonialNavigationSeparator}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="#4A4A4A"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <div style={Styles.testimonialContainerRight}>
          <div style={{ ...Styles.testimonialItem, ...Styles.marginRightMed }}>
            <p style={Styles.testimonialItemTitle}>Tôi yêu BIOVE</p>
            <p style={Styles.testimonialItemContent}>
              Biove là nơi mà chúng tôi đặt niềm tin, cũng như là nơi mà chúng
              tôi đặt niềm hy vọng về một thế giới hạnh phúc hơn, trong lành hơn
              cho con cháu thế hệ tiếp nối của nước nhà
            </p>
            <div style={Styles.testimonialItemPerson}>
              <div style={Styles.testimonialItemAvatar}>
                <img
                  style={Styles.testimonialItemAvatarStyle}
                  src={avatar1}
                  alt="avatar 1"
                ></img>
              </div>
              <p style={Styles.testimonialItemName}>Hoàng Dũng</p>
            </div>
          </div>
          <div style={Styles.testimonialItem}>
            <p style={Styles.testimonialItemTitle}>Tôi ủng hộ BIOVE</p>
            <p style={Styles.testimonialItemContent}>
              Là một dự án cộng đồng rất ý nghĩa và thiết thực. Tôi sẽ đã đồng
              hành cùng BIOVE, chúc các bạn mãi bền vững
            </p>
            <div style={Styles.testimonialItemPerson}>
              <div style={Styles.testimonialItemAvatar}>
                <img
                  style={Styles.testimonialItemAvatarStyle}
                  src={avatar2}
                  alt="avatar 2"
                ></img>
              </div>
              <p style={Styles.testimonialItemName}>Nam K</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Styles = {
  testimonialContainer: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "90vh",
    padding: "9%",
    display: "flex",
    justifyContent: "space-between",
  },
  testimonialContainerLeft: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  testimonialContainerRight: {
    display: "flex",
    marginLeft:"20%"
  },
  testimonialTitle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#9B9B9B",
  },
  testimonialHead: {
    fontSize: "50px",
    fontWeight: "500",
    width: "20%",
  },
  testimonialNavigation: {
    width: "120px",
    height: "60px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
  testimonialNavigationSeparator: {
    width: "40px",
    height: "1px",
    backgroundColor: "#D8D8D8",
    transform: "rotate(-70deg)",
  },
  testimonialItem: {
    backgroundColor: "white",
    width: "50%",
    height: "100%",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    padding: "5%",
    display: "flex",
    flexDirection: "column",
  },
  testimonialItemTitle: {
    fontSize: "16px",
    fontWeight: "500",
  },
  testimonialItemContent: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  testimonialItemPerson: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
  },
  testimonialItemAvatar: {
    width: "40px",
    height: "40px",
    backgroundColor: "#AEAEAE",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  testimonialItemAvatarStyle: {
    width: "100%",
  },
  testimonialItemName: {
    marginBottom: "0",
    marginLeft: "10px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  marginRightMed: {
    marginRight: "20px",
  },
};
