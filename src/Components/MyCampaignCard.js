import React, { Component } from "react";
import myCampaignCardImage from "../assets/myCampaignCardImage.png"

export default class MyCampaignCard extends Component {
  render() {
      const {campaignName,moneyDonated,location}  = this.props
      return (
      <div style={Styles.myCampaignCard}>
        <div style={Styles.myCampaignCardImage}>
            <div style={Styles.overlay}></div>
          <img src={myCampaignCardImage} alt="my campaign card image" style={{width:"100%"}}></img>
          <p style={Styles.myCampaignName}>{campaignName}</p>
        </div>
        
        <div style={Styles.myCampaignCardContent}>
          <p style={Styles.myCampaignMoneyDonated}>Đã đóng góp tổng cộng {moneyDonated} vnd</p>
          <div style={Styles.myCampaignLocation}>
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.41342C0 2.87799 2.87047 0 6.39665 0C9.92284 0 12.7933 2.87799 12.8 6.41342C12.8 6.81593 12.7599 7.2218 12.6863 7.61761C12.6829 7.64109 12.6695 7.71153 12.6428 7.83228C12.5457 8.26834 12.4019 8.69098 12.2145 9.09686C11.5254 10.7237 10.0065 13.2226 6.68437 15.8994C6.60073 15.9665 6.50037 16 6.4 16C6.29963 16 6.19927 15.9665 6.11563 15.8994C2.79017 13.2226 1.27465 10.7237 0.585468 9.09686C0.398118 8.69098 0.25426 8.26499 0.15724 7.83228C0.130476 7.71153 0.117094 7.64109 0.113748 7.61761C0.0368008 7.2218 0 6.81593 0 6.41342ZM11.788 7.47002C11.7888 7.46667 11.7896 7.46331 11.7896 7.45996C11.8566 7.11782 11.89 6.76562 11.89 6.41006C11.89 3.37442 9.42436 0.902306 6.39665 0.902306C3.36895 0.902306 0.903293 3.37442 0.903293 6.41006C0.903293 6.76226 0.936749 7.11111 1.00366 7.4566C1.00366 7.46214 1.00467 7.46667 1.00558 7.47073C1.00633 7.47405 1.007 7.47707 1.007 7.48008C1.00771 7.48362 1.00856 7.48864 1.00966 7.49508C1.01376 7.51924 1.02127 7.56342 1.03711 7.62432V7.63103C1.1241 8.00671 1.24788 8.37568 1.40847 8.72453C1.41014 8.7262 1.41098 8.72872 1.41181 8.73124C1.41265 8.73375 1.41349 8.73627 1.41516 8.73795C2.04077 10.2239 3.41244 12.4914 6.39665 14.9635C9.38087 12.4914 10.7525 10.2239 11.3781 8.73795C11.3798 8.73627 11.3807 8.73375 11.3815 8.73124C11.3823 8.72872 11.3832 8.72621 11.3848 8.72453C11.5488 8.37233 11.6726 8.00671 11.7562 7.63103V7.62432C11.7729 7.54717 11.783 7.49686 11.7863 7.48008C11.7863 7.47673 11.7871 7.47338 11.788 7.47002Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.40039 6.40039C2.40039 4.19611 4.19611 2.40039 6.40039 2.40039C8.60467 2.40039 10.4004 4.19611 10.4004 6.40039C10.4004 8.60467 8.60467 10.4004 6.40039 10.4004C4.19611 10.4004 2.40039 8.60467 2.40039 6.40039ZM3.29001 6.40039C3.29001 8.11374 4.68375 9.51077 6.40039 9.51077C8.11703 9.51077 9.51077 8.11374 9.51077 6.40039C9.51077 4.68705 8.11374 3.29001 6.40039 3.29001C4.68705 3.29001 3.29001 4.68705 3.29001 6.40039Z"
                fill="#9B9B9B"
              />
            </svg>
            <p style={Styles.myCampaignLocationText}>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}
const Styles = {
  myCampaignCard:{
    marginBottom: "40px"
  },
  myCampaignCardImage:{
      display:"flex",
      width:"356px",
      height:'340px',
      overflow:"hidden",
      alignItems:"center",
      justifyContent:"center",
      position:"relative",
      background:"black"
  },
  overlay:{
    width:"100%",
    height:"100%",
    position:"absolute",
    top:"0",
    left:"0",
    background:"rgba(0,0,0,.2)"
  },
  myCampaignName:{
      fontSize:"24px",
      fontWeight:"500",
      position:"absolute",
      bottom:"40px",
      right:"0",
      color:"white",
      width:"281px",
      
  },
  myCampaignCardContent:{
      width:"356px",
      height:"129px",
      background:"#C7C2C2",
      padding:"20px 25px"
  },
  myCampaignMoneyDonated:{
     
      fontSize:"18px",
      fontWeight:"500",
      marginBottom:"0",
      
  },
  myCampaignLocation:{
      display:"flex",
      alignItems:"center",
      marginTop:"13px"
  },
  myCampaignLocationText:{
      marginBottom:"0",
      fontSize:"19px",
      fontWeight:"500",
      marginLeft:"5px"
      
  }
};
