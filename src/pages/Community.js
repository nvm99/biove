import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import StoryCard from "../Components/StoryCard";
import CampaignCard from "../Components/CampaignCard";

export default class Community extends Component {
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
          <div style={Styles.communityInfo}>
            <div>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#060407",
                  marginBottom: "0px",
                }}
              >
                Since 20/10/2020
              </p>
              <div style={Styles.ratingContainer}>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.77247 0.470891L10.5771 4.05545C10.7026 4.30476 10.9452 4.47751 11.2259 4.51743L15.2613 5.09228C15.9682 5.19305 16.2502 6.04437 15.7389 6.53285L12.8189 9.32302C12.616 9.51704 12.5232 9.79678 12.5712 10.0706L13.2604 14.0105C13.3813 14.7005 12.6423 15.2266 12.0102 14.9011L8.401 13.0411C8.15002 12.9118 7.84998 12.9118 7.599 13.0411L3.9898 14.9011C3.35768 15.2269 2.61875 14.7005 2.73957 14.0105L3.42877 10.0706C3.47683 9.79678 3.38404 9.51704 3.18112 9.32302L0.261124 6.53285C-0.250184 6.04404 0.0318369 5.19273 0.738724 5.09228L4.77412 4.51743C5.05481 4.47751 5.29744 4.30476 5.42293 4.05545L7.22753 0.470891C7.54326 -0.156964 8.45641 -0.156964 8.77247 0.470891Z"
                    fill="#30797C"
                  />
                </svg>
                <p style={Styles.rating}>4.8 (89)</p>
              </div>
            </div>
            <div
              style={{
                fontWeight: "500",
                color: "#090404",
                marginLeft: "100px",
              }}
            >
              <p style={{ fontSize: "24px", marginBottom: "2px" }}>
                Total contribution
              </p>
              <p style={{ fontSize: "18px", marginBottom: "2px" }}>
                134,445,555 vnd
              </p>
              <p style={{ fontSize: "13px", marginBottom: "2px" }}>
                2.333 members
              </p>
            </div>
          </div>
        </div>
        <div style={Styles.communityDescription}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              style={{ marginLeft: "100px", marginBottom: "40px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3796 2.1661L46.2747 18.6551C46.8237 19.8019 47.8852 20.5966 49.1132 20.7802L66.7681 23.4245C69.8607 23.888 71.0946 27.8041 68.8576 30.0511L56.0826 42.8859C55.1948 43.7784 54.7889 45.0652 54.9992 46.3249L58.0144 64.4483C58.543 67.6224 55.3102 70.0425 52.5446 68.545L36.7544 59.9889C35.6563 59.3945 34.3437 59.3945 33.2456 59.9889L17.4554 68.545C14.6898 70.044 11.457 67.6224 11.9856 64.4483L15.0008 46.3249C15.2111 45.0652 14.8052 43.7784 13.9174 42.8859L1.14242 30.0511C-1.09455 27.8026 0.139286 23.8865 3.23192 23.4245L20.8868 20.7802C22.1148 20.5966 23.1763 19.8019 23.7253 18.6551L31.6204 2.1661C33.0018 -0.722033 36.9968 -0.722033 38.3796 2.1661Z"
                fill="#30797C"
              />
            </svg>
            <p style={{ width: "356px", fontSize: "30px", fontWeight: "400" }}>
              Mô tả về cộng đồng/ Thông tin về cộng đồng
            </p>
          </div>
          <p
            style={{
              width: "545px",
              fontSize: "25px",
              fontWeight: "400",
              color: "#4A4A4A",
              marginLeft: "100px",
            }}
          >
            Giới thiệu/ Ban quản trị / <br />
            The rules of travel have altered so much in the last few years, with
            strict regulation regarding air travel, questionable car searches
            that may vary in regulation from state to state, and the feeling of
            never really being ultimately sure what is appropriate <br />
            <br />
            Số điện thoại: 034454333 <br />
            Mail : congdongltv@gmail.com
          </p>
        </div>
        <div
          style={{
            marginLeft: "7%",
            width: "1108px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "77px",
            marginBottom: "20px",
          }}
        >
          <p style={Styles.title}>Community’s stories</p>
          <button style={Styles.uploadBtn}>Upload your story</button>
        </div>
        <div style={Styles.storyContainer}>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
        </div>
        <div style={Styles.btnContainer}>
          <button style={Styles.loadMoreBtn}>Load more</button>
        </div>
        <div>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "500",
              marginLeft: "7%",
              marginTop: "77px",
              marginBottom: "20px",
            }}
          >
            Active list
          </p>
          <div style={Styles.storyContainer}>
            <CampaignCard done={false}></CampaignCard>
            <CampaignCard done={false}></CampaignCard>
            <CampaignCard done={false}></CampaignCard>
          </div>
          <div style={Styles.btnContainer}>
            <button style={Styles.loadMoreBtn}>Load more</button>
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "500",
              marginLeft: "7%",
              marginTop: "77px",
              marginBottom: "20px",
            }}
          >
            Done list
          </p>
          <div style={Styles.storyContainer}>
            <CampaignCard done={true}></CampaignCard>
            <CampaignCard done={true}></CampaignCard>
            <CampaignCard done={true}></CampaignCard>
          </div>
          <div style={Styles.btnContainer}>
            <button style={Styles.loadMoreBtn}>Load more</button>
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
    justifyContent: "space-around",
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
    marginRight: "60px",
  },
  communityInfo: {
    background: "#FF9E6F",
    height: "100%",
    width: "683px",
    borderRadius: "48px",
    paddingLeft: "85px",
    display: "flex",
    alignItems: "center",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "13px",
  },
  rating: {
    marginBottom: "0",
    color: "#30797C",
    fontSize: "13px",
    marginLeft: "15px",
  },
  communityDescription: {
    display: "flex",
    marginLeft: "200px",
    marginTop: "73px",
  },
  title: {
    fontSize: "50px",
    fontWeight: "500",
  },
  storyContainer: {
    marginLeft: "7%",
    width: "1108px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  btnContainer: {
    marginLeft: "7%",
    width: "1108px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  loadMoreBtn: {
    border: "none",
    background: "#FF5200",
    color: "white",
    fontSize: "16px",
    width: "150px",
    height: "40px",
  },
  uploadBtn: {
    border: "none",
    background: "#FF5200",
    color: "white",
    fontSize: "16px",
    width: "201px",
    height: "40px",
    borderRadius: "11px",
  },
};
