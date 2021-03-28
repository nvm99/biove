import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={Styles.footerContainer}>
        <div style={Styles.footerContactInfo}>
          <p style={Styles.footerContactInfoTitle}>Contact info:</p>
          <p style={Styles.footerContactInfoAddress}>
            Le Quy Don, Bien Hoa Dong Nai
          </p>
          <p style={Styles.footerContactInfoPhone}>Phone : 03030320230</p>
          <p style={Styles.footerContactInfoEmail}>Email : BIOVE@Gmail.com</p>
          <div style={Styles.footerSocialNetworkContainer}></div>
        </div>
        <div style={Styles.footerMailingList}>
          <p style={Styles.footerMailingListTitle}>Mailing List</p>
          <p style={Styles.footerMailingListDetail}>
            Đăng nhập để nhận thông báo qua mail các chiên dịch của BIOVE
          </p>
          <form style={Styles.footerEmailForm}>
            <input
              type="email"
              id="emailSubscribe"
              name="emailSubscribe"
              style={Styles.footerEmailInput}
              placeholder="Your email"
            />
            <button style={Styles.footerEmailButton}>Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}
const Styles = {
  footerContainer: {
    marginLeft: "9%",
    marginTop: "4%",
    display: "flex",
  },
  footerContactInfoTitle: {
    fontSize: "13px",
    fontWeight: "500",
  },
  footerContactInfoAddress: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  footerContactInfoPhone: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  footerContactInfoEmail: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  footerMailingList: {
    marginLeft: "30%",
  },
  footerMailingListTitle: {
    fontSize: "13px",
    fontWeight: "500",
  },
  footerMailingListDetail: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  footerEmailForm:{
    display:'flex',
    alignItems:"center"
  },
  footerEmailButton: {
    width: "100px",
    height: "40px",
    border: "none",
    backgroundColor: "#FF5200",
    color: "white",
    fontSize: "13px",
    fontWeight: "500",
  },
  footerEmailInput: {
    width: "250px",
    height: "40px",
    border:"1px solid #E4E4E4"
  },
};
