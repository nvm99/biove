import React, { Component } from "react";
import MyCampaignCard from "./MyCampaignCard";
export default class MyCampaignComponent extends Component {
  render() {
    return (
      <div style={Styles.myCampaignContainer}>
        <div style={Styles.summaryContainer}>
          <div style={Styles.summaryIcon}>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9921 8.27172L14.7613 0.527394C14.7129 0.223398 14.4557 0 14.1538 0H1.84618C1.54437 0 1.28706 0.223398 1.23871 0.527394L0.00793554 8.27172C-0.0209394 8.45341 0.0298105 8.63884 0.146716 8.77906C0.263654 8.91927 0.434966 9 0.615403 9H15.3846C15.565 9 15.7363 8.91921 15.8533 8.77906C15.9702 8.63887 16.021 8.45341 15.9921 8.27172ZM1.33859 7.74439L1.84924 4.53118L2.3599 7.74439H1.33859ZM2.57552 1.25571L3.60674 7.74436H14.6614L13.6302 1.25571H2.57552Z"
                fill="#FF5200"
              />
              <path
                d="M12.3572 4H4.64285C4.28783 4 4 4.22387 4 4.5C4 4.77613 4.28783 5 4.64285 5H12.3572C12.7122 5 13 4.77613 13 4.5C13 4.22387 12.7122 4 12.3572 4Z"
                fill="#FF5200"
              />
            </svg>
          </div>
          <p style={Styles.summaryText}>
            My Reservations - <span style={Styles.numberOfCampaign}>15</span>{" "}
            Campaigns - đã ủng hộ tổng cộng{" "}
            <span style={Styles.moneyDonated}>15.000.000 vnd</span>{" "}
          </p>
        </div>
        <div style={Styles.myCampaignCardContainer}>
          <MyCampaignCard
            campaignName={"Chiến dịch mùa hè xanh"}
            moneyDonated={"150.000"}
            location={"Lâm Đồng"}
          ></MyCampaignCard>
          <MyCampaignCard
            campaignName={"Chiến dịch mùa hè xanh"}
            moneyDonated={"150.000"}
            location={"Lâm Đồng"}
          ></MyCampaignCard>
          
        </div>
      </div>
    );
  }
}
const Styles = {
  myCampaignContainer: {
    width: "733px",
  },
  summaryContainer: {
    width: "100%",
    height: "77px",
    borderRadius: "3px",
    border: "1px solid #E4E4E4",
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
  },

  summaryIcon: {
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 82, 0, 0.4)",
  },
  summaryText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#FF5200",
    marginBottom: "0",
    marginLeft: "20px",
  },
  myCampaignCardContainer: {
    width: "100%",
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap:"wrap",
    
  },
};
