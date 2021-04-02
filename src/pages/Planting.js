import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import PlantingCard from "../Components/PlantingCard";
import DoubleRangeSlider from "../Components/DoubleRangeSlider";
import RushCampaignSlider from "../Components/RushCampaignSlider"

export default class Planting extends Component {
  farms = [
    "Anywhere",
    "BAO LOC",
    "LAM DONG",
    "DONG NAI",
    "HA TINH",
    "DA NANG",
    "HO CHI MINH",
  ];
  communities = [
    "All",
    "LTV BIOVE",
    "BTS-VN",
    "LTV - ALUMNI",
    "ĐỒNG NAI FC",
    "THANH NIEN",
    "BIENHOANESE",
  ];
  state = {
    inputSearch: "",
    farmSelectedIndex: 0,
    communitySelectedIndex: 0,
  };
  handleSearch = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  onFarmSelected = (index) => {
    this.setState({
      farmSelectedIndex: index,
    });
  };
  onCommunitySelected = (index) => {
    this.setState({
      communitySelectedIndex: index,
    });
  };
  render() {
    const {
      inputSearch,
      farmSelectedIndex,
      communitySelectedIndex,
    } = this.state;
    return (
      <div>
        <div style={{ marginBottom: "50px" }}>
          <div style={Styles.sideHeroImage}>
            <p style={Styles.sideHeroText}>Go green your home</p>
          </div>
          <div style={Styles.sideNav}>
            <a href="#" style={Styles.sideNavLink}>
              FARMS
            </a>
            <a href="#" style={Styles.sideNavLink}>
              CAMPAIGN
            </a>
            <a href="#" style={Styles.sideNavLink}>
              COMMUNITY
            </a>
            <a href="#" style={Styles.sideNavLink}>
              TREES
            </a>
          </div>
          <div style={Styles.plantingContent}>
            <div style={Styles.plantingDisplay}>
              <p style={Styles.plantingDisplayText}>
                PLANTING AT WHEREVER YOU WANT
              </p>
              <div style={Styles.plantingDisplayCardContainer}>
                <PlantingCard
                  campaignName="Chiến dịch A , kỉ niệm 50 năm huyện Trảng Bom"
                  minBudget="50K"
                  progress="80"
                  score="4.8"
                  numberOfReviews="89"
                />
                <PlantingCard
                  campaignName="Chiến dịch A , kỉ niệm 50 năm huyện Trảng Bom"
                  minBudget="50K"
                  progress="80"
                  score="4.8"
                  numberOfReviews="89"
                />
              </div>
            </div>
            <div style={Styles.plantingFilter}>
              <div style={Styles.searchBarContainer}>
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.9519 20.7676L27.7578 27.5721C28.0807 27.8949 28.0807 28.4288 27.7578 28.7517C27.5964 28.9193 27.379 29 27.1679 29C26.9568 29 26.7394 28.9131 26.578 28.7517L19.772 21.9472C17.6731 23.7725 14.9346 24.8776 11.9415 24.8776C5.35906 24.8776 0 19.5197 0 12.9388C0 6.35787 5.35285 1 11.9415 1C18.5238 1 23.8829 6.35166 23.8829 12.9388C23.8829 15.9313 22.7776 18.6692 20.9519 20.7676ZM11.5 2C5.71325 2 1 6.70547 1 12.4968C1 18.2882 5.71325 23 11.5 23C17.2931 23 22 18.2818 22 12.4968C22 6.71182 17.2931 2 11.5 2Z"
                    fill="#E91B1B"
                  />
                  <path
                    d="M27.7578 27.5721L27.5811 27.7489H27.5811L27.7578 27.5721ZM20.9519 20.7676L20.7633 20.6035L20.6102 20.7795L20.7751 20.9444L20.9519 20.7676ZM27.7578 28.7517L27.581 28.5748L27.5778 28.5782L27.7578 28.7517ZM26.578 28.7517L26.4012 28.9285H26.4012L26.578 28.7517ZM19.772 21.9472L19.9488 21.7704L19.7839 21.6056L19.608 21.7586L19.772 21.9472ZM27.9346 27.3953L21.1286 20.5908L20.7751 20.9444L27.5811 27.7489L27.9346 27.3953ZM27.9346 28.9285C28.3551 28.508 28.3551 27.8157 27.9346 27.3953L27.5811 27.7489C27.8063 27.9741 27.8063 28.3497 27.5811 28.5749L27.9346 28.9285ZM27.1679 29.25C27.4414 29.25 27.7256 29.1455 27.9379 28.9251L27.5778 28.5782C27.4671 28.6931 27.3166 28.75 27.1679 28.75V29.25ZM26.4012 28.9285C26.6093 29.1365 26.8901 29.25 27.1679 29.25V28.75C27.0234 28.75 26.8695 28.6897 26.7547 28.5749L26.4012 28.9285ZM19.5953 22.124L26.4012 28.9285L26.7547 28.5749L19.9488 21.7704L19.5953 22.124ZM11.9415 25.1276C14.9973 25.1276 17.7935 23.9991 19.9361 22.1359L19.608 21.7586C17.5527 23.5459 14.8719 24.6276 11.9415 24.6276V25.1276ZM-0.25 12.9388C-0.25 19.6579 5.22104 25.1276 11.9415 25.1276V24.6276C5.49708 24.6276 0.25 19.3816 0.25 12.9388H-0.25ZM11.9415 0.75C5.21475 0.75 -0.25 6.21983 -0.25 12.9388H0.25C0.25 6.49591 5.49095 1.25 11.9415 1.25V0.75ZM24.1329 12.9388C24.1329 6.21346 18.6618 0.75 11.9415 0.75V1.25C18.3859 1.25 23.6329 6.48987 23.6329 12.9388H24.1329ZM21.1405 20.9317C23.0041 18.7896 24.1329 15.994 24.1329 12.9388H23.6329C23.6329 15.8685 22.551 18.5487 20.7633 20.6035L21.1405 20.9317ZM1.25 12.4968C1.25 6.84371 5.85115 2.25 11.5 2.25V1.75C5.57535 1.75 0.75 6.56723 0.75 12.4968H1.25ZM11.5 22.75C5.85135 22.75 1.25 18.1501 1.25 12.4968H0.75C0.75 18.4262 5.57515 23.25 11.5 23.25V22.75ZM21.75 12.4968C21.75 18.144 17.1548 22.75 11.5 22.75V23.25C17.4314 23.25 22.25 18.4197 22.25 12.4968H21.75ZM11.5 2.25C17.155 2.25 21.75 6.84987 21.75 12.4968H22.25C22.25 6.57378 17.4312 1.75 11.5 1.75V2.25Z"
                    fill="#CC1F1F"
                  />
                </svg>
                <div style={Styles.inputSearch}>
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="inputSearch"
                    placeholder="FIND EVERYTHING"
                    name="inputSearch"
                    onChange={this.handleSearch}
                    value={inputSearch}
                  />
                </div>
              </div>
              <p style={Styles.filterText}>Filter By</p>
              <div style={Styles.filterSeparator}></div>
              <div style={Styles.filterContainer}>
                <div style={Styles.budgetRangeFilter}>
                  <p style={Styles.budgetRangeFilterTitle}>
                    Budget Per SUBSCRIPTION
                  </p>
                  <DoubleRangeSlider />
                  <button style={Styles.applyBtn}>Apply</button>
                  <div style={Styles.dashedSeparator}></div>
                </div>
                <div style={Styles.selectFilter}>
                  <p style={Styles.selectFilterTitle}>Farms</p>
                  <div style={Styles.selectFilterContainer}>
                    {this.farms.map((farm, i) => {
                      if (i === farmSelectedIndex) {
                        return (
                          <div
                            style={{
                              ...Styles.selectFilterItem,
                              ...Styles.selectFilterItemSelected,
                            }}
                            onClick={() => this.onFarmSelected(i)}
                          >
                            {farm}
                          </div>
                        );
                      }
                      return (
                        <div
                          style={Styles.selectFilterItem}
                          onClick={() => this.onFarmSelected(i)}
                        >
                          {farm}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div style={Styles.selectFilter}>
                  <p style={Styles.selectFilterTitle}>Communities</p>
                  <div style={Styles.selectFilterContainer}>
                    {this.communities.map((community, i) => {
                      if (i === communitySelectedIndex) {
                        return (
                          <div
                            style={{
                              ...Styles.selectFilterItem,
                              ...Styles.selectFilterItemSelected,
                            }}
                            onClick={() => this.onCommunitySelected(i)}
                          >
                            {community}
                          </div>
                        );
                      }
                      return (
                        <div
                          style={Styles.selectFilterItem}
                          onClick={() => this.onCommunitySelected(i)}
                        >
                          {community}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{background:"#F8F8F8"}}>
        <RushCampaignSlider/>
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
    fontWeight: "300",
    color: "white",
    marginBottom: "0",
    position: "absolute",
    top: "207px",
    left: "166px",
  },
  sideNav: {
    marginLeft: "6%",
    width: "1126px",

    marginTop: "76px",
    height: "58px",
    backgroundColor: "#01A78E",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sideNavLink: {
    marginBottom: "0",
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
  },
  plantingContent: {
    display: "flex",
  },
  plantingDisplay: {
    marginLeft: "7%",
    width: "730px",
    marginTop: "56px",
  },
  plantingDisplayText: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500",
    width: "600px",
  },
  plantingDisplayCardContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  plantingFilter: {
    width: "356px",
    marginLeft: "24px",
    marginTop: "140px",
  },
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
  },
  inputSearch: {
    width: "261px",
    height: "40px",
    borderRadius: "8px",
    marginLeft: "15px",
  },
  filterText: {
    marginTop: "17px",
    marginBottom: "0",
    fontSize: "24px",
    fontWeight: "500",
  },
  filterSeparator: {
    backgroundColor: "#30797C",
    width: "74px",
    height: "3px",
    marginTop: "14px",
  },
  filterContainer: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    marginTop: "20px",
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
  },
  budgetRangeFilterTitle: {
    fontSize: "13px",
    fontWeight: "500",
  },
  dashedSeparator: {
    width: "316px",
    height: ".5px",
    backgroundColor: "#E4E4E4",
    marginTop: "20px",
  },
  selectFilter: {
    marginTop: "19px",
  },
  selectFilterTitle: {
    fontSize: "13px",
    fontWeight: "500",
  },
  selectFilterContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  selectFilterItem: {
    padding: "6px 20px",
    border: "1px solid #E4E4E4",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
  },
  selectFilterItemSelected: {
    color: "white",
    backgroundColor: "#4A90E2",
  },
  applyBtn: {
    padding: "6px 20px",
    border: "1px solid #0D5CB6",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "#0D5CB6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    marginTop: "15px",
  },
};
