import React, { Component } from "react";
import vietbando from "../assets/vietbando.png";
import discover from "../assets/discover.png";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import mastercard from "../assets/mastercard.png";

export default class Footer extends Component {
  render() {
    return (
      <div style={Styles.footerContainer}>
        <div style={Styles.footerContainerFirst}>
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
        <div style={Styles.footerContainerSecond}>
          <p style={Styles.footerSponsorTitle}>Các đơn vị bảo trợ</p>
          <div style={Styles.footerSponsorContainer}>
            <img
              style={Styles.footerSponsorVBD}
              src={vietbando}
              alt="viet ban do"
            ></img>
            <img
              style={Styles.footerSponsorDiscover}
              src={discover}
              alt="discover"
            ></img>
            <img
              style={Styles.footerSponsorPaypal}
              src={paypal}
              alt="paypal"
            ></img>
            <img style={Styles.footerSponsorVisa} src={visa} alt="visa"></img>
            <img
              style={Styles.footerSponsorMastercard}
              src={mastercard}
              alt="mastercard"
            ></img>
          </div>
        </div>
        <div style={Styles.footerContainerThird}>
            <p style={Styles.footerCopyRight}>Copyright © 2019 BIOVE Foudation. All rights reserved</p>
            <p style={Styles.footerMadeIn}>Made in EARTH</p>
        </div>
      </div>
    );
  }
}
const Styles = {
  footerContainer:{
    borderTop:"1px solid #E4E4E4"
  },
  footerContainerFirst: {
    marginLeft: "9%",
    marginTop: "4%",
    marginBottom: "4%",
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
  footerEmailForm: {
    display: "flex",
    alignItems: "center",
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
    border: "1px solid #E4E4E4",
  },
  footerContainerSecond: {
    width: "100%",
    height: "120px",
    borderTop: "1px solid #E4E4E4",
    borderBottom: "1px solid #E4E4E4",
    display: "flex",
    alignItems: "center",
    padding: "5% 9% ",
  },
  footerSponsorContainer:{
    marginLeft:"10%"
  },
  footerSponsorTitle: {
    color: "#30797C",
    fontSize: "24px",
    fontWeight: "500",
    marginBottom: "0",
  },
  footerSponsorVBD: {
    height: "33px",
  },
  footerSponsorDiscover: {
    height: "16px",
    marginLeft: "30px",
  },
  footerSponsorPaypal: {
    height: "20px",
    marginLeft: "30px",
  },
  footerSponsorVisa: {
    height: "13px",
    marginLeft: "30px",
  },
  footerSponsorMastercard: {
    height: "27px",
    marginLeft: "30px",
  },
  footerContainerThird:{
    width: "100%",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    padding: "5% 9% ",
  },
  footerCopyRight:{
      fontSize:"12px",
      fontWeight:"500",
      color:"#333333",
      marginBottom:"0"
  },
  footerMadeIn:{
    fontSize:"12px",
    fontWeight:"500",
    color:"#333333",
    marginBottom:"0"
  }
};
