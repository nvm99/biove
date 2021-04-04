import React, { Component } from "react";
import myCampaignCardImage from "../assets/myCampaignCardImage.png";

export default class MyTrackListCard extends Component {
  render() {
    const { treeName, treeId, done } = this.props;
    return (
      <div style={Styles.myCampaignCard}>
        <div style={Styles.myCampaignCardImage}>
          <div style={Styles.overlay}></div>
          <img
            src={myCampaignCardImage}
            alt="my campaign card image"
            style={{ height: "100%" }}
          ></img>
          <p style={Styles.treeName}>Cây bàng</p>
        </div>

        <div style={Styles.campaignCardContent}>
          <p style={Styles.campaignTreeIdText}>Mã cây 2021/1/001</p>
          <p style={Styles.campaignTreeIdText}>{done?"Đã trồng":"Đang trồng"}</p>
          <button style={Styles.cardIconBtnEdit}>
            <svg
              width="37"
              height="32"
              viewBox="0 0 37 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.2119 15.1169L27.4285 19.5524L27.3499 19.6734C27.8476 20.0498 28.2534 20.5065 28.5441 21.0175C28.8207 21.5426 28.9754 22.1086 28.9998 22.6841C29.013 23.8436 28.475 24.9579 27.5091 25.7714C26.5433 26.5849 25.2325 27.0279 23.8774 26.9986C23.2056 26.9714 22.5453 26.8393 21.9291 26.6089C21.3318 26.3602 20.7978 26.013 20.3578 25.5874L14.387 20.4798C12.8518 19.1724 12.4889 17.1629 13.4914 15.5202L8.25908 11.0847C7.41537 10.2772 6.96552 9.22374 7.00206 8.14115C7.08335 5.88942 9.1938 4.07822 11.8258 4.00137C13.0936 3.97379 14.3253 4.36349 15.2669 5.09008L21.3163 10.211C22.0653 10.8465 22.5555 11.6711 22.7147 12.5632C22.8588 13.4384 22.6832 14.3304 22.2119 15.1169ZM20.3264 15.2245C20.3143 15.2349 20.3022 15.2453 20.29 15.2556L20.3264 15.2245ZM20.2632 15.278L20.29 15.2556L20.2635 15.2782L20.2632 15.278ZM20.2632 15.278C18.9358 16.3737 16.8318 16.397 15.4712 15.3186C16.11 14.772 16.9718 14.4588 17.8752 14.4449C18.7642 14.4607 19.6149 14.7574 20.2632 15.278ZM11.7159 7.45567C11.6581 7.39165 11.6056 7.32429 11.5587 7.25405C11.4953 7.09733 11.4953 6.92691 11.5587 6.77018C11.602 6.7104 11.6549 6.65611 11.7159 6.60889C11.8587 6.49946 12.0427 6.43746 12.2344 6.43416C12.4215 6.43702 12.6007 6.4993 12.7372 6.60889L17.2467 10.4664C17.3163 10.5225 17.3701 10.5915 17.4038 10.668C17.4866 10.8216 17.4866 10.9984 17.4038 11.1519C17.3627 11.225 17.3098 11.2929 17.2467 11.3535C17.1054 11.4651 16.9205 11.5274 16.7282 11.5282C16.5404 11.5281 16.3601 11.4654 16.2254 11.3535L11.7159 7.45567ZM26.3905 24.701C26.3908 24.7008 26.3911 24.7005 26.3915 24.7003L26.3886 24.7027C26.3893 24.7021 26.3899 24.7016 26.3905 24.701ZM26.3443 24.7406L26.3886 24.7027C26.374 24.7154 26.3592 24.728 26.3443 24.7406ZM26.3905 24.701C26.0584 24.9747 25.6698 25.1932 25.2444 25.3454C24.8211 25.4959 24.3673 25.5736 23.9089 25.5739C23.4506 25.5722 22.9971 25.4946 22.5733 25.3454C22.1504 25.1959 21.766 24.9767 21.442 24.7003L15.4083 19.5524C14.9233 19.1472 14.5897 18.628 14.4499 18.0605C14.3052 17.4906 14.3599 16.897 14.607 16.3535C15.5513 17.0271 16.7571 17.3725 17.9852 17.3212C19.2145 17.2752 20.3796 16.8392 21.2534 16.0981L26.2972 20.4261C27.0022 20.9916 27.4102 21.7769 27.4285 22.6035C27.4056 23.3906 27.0341 24.1401 26.3905 24.701Z"
                fill="#040404"
              />
              <path
                d="M17.7317 11.8285C17.5893 11.938 17.403 11.9992 17.2092 12C17.02 11.9998 16.8383 11.9383 16.7026 11.8285L12.2063 8.00264C12.1481 7.93981 12.0952 7.87369 12.048 7.80475C11.984 7.65092 11.984 7.48364 12.048 7.32982C12.0916 7.27114 12.1449 7.21785 12.2063 7.1715C12.3502 7.06409 12.5356 7.00324 12.7287 7C12.9173 7.0028 13.0979 7.06393 13.2354 7.1715L17.7792 10.9578C17.8493 11.0128 17.9035 11.0805 17.9375 11.1557C18.0208 11.3064 18.0208 11.4799 17.9375 11.6306C17.8814 11.705 17.812 11.7717 17.7317 11.8285Z"
                fill="#744CC6"
                fill-opacity="0.5"
              />
            </svg>
          </button>
          
        </div>
      </div>
    );
  }
}
const Styles = {
  myCampaignCard: {
    marginBottom: "40px",
  },
  myCampaignCardImage: {
    display: "flex",
    width: "356px",
    height: "340px",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "black",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    background: "rgba(0,0,0,.2)",
  },
  treeName: {
    fontSize: "24px",
    fontWeight: "500",
    position: "absolute",
    bottom: "0",
    right: "0",
    color: "white",
    width: "156px",
  },
  campaignCardContent: {
    width: "356px",
    height: "65px",
    background: "#C7C2C2",
    padding: "5px 25px",
    position: "relative",
  },
  campaignName: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "0",
  },
  campaignLocation: {
    display: "flex",
    alignItems: "center",
    marginTop: "12px",
  },
  campaignTreeIdText: {
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "500",
    marginLeft: "5px",
    
  },
  campaignLocationText: {
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  cardIconBtnEdit: {
    position: "absolute",
    bottom: "12px",
    right: "17px",
    textDecoration:"none",
    border:"none",
    background:"rgba(0,0,0,0)"
  },
};
