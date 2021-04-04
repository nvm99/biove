import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import { withRouter } from "react-router-dom";
import TreeCard from "../Components/TreeCard";
import contact from "../../src/assets/contact.png";
import momo from "../../src/assets/momo.png";
import zalopay from "../../src/assets/zalopay.png";
import QRCode from "qrcode.react";

class TreeDonate extends Component {
  state = {
    paymentMethods: [momo, zalopay],
    paymentSelected: 0,
    donateInput: "10000",
    donateValue: "10000",
    paymentComponent: true,
    isCheck: false,
    btnFirstClick:false
  };
  onPaymentMethodSelected = (i) => {
    this.setState({
      paymentSelected: i,
    });
  };

  handleForm = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const treeId = this.props.location.pathname.split("/")[2];
    const paymentMethods = this.state.paymentMethods.map((payment, i) => {
      if (this.state.paymentSelected === i) {
        return (
          <div
            style={Styles.paymentMethod}
            onClick={() => this.onPaymentMethodSelected(i)}
          >
            <div style={Styles.overlay}>
              <svg
                width="34"
                height="31"
                viewBox="0 0 68 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.7532 1.05987L26.4297 55.5221L3.94424 32.1906C2.89999 31.1039 1.36761 31.3275 0.532204 32.682C-0.305626 34.0427 -0.135632 36.024 0.91105 37.1108L25.196 62.3102C25.6428 62.7732 26.1795 63 26.7138 63C27.3841 63 28.0519 62.6409 28.5303 61.9416L67.3862 5.24297C68.2775 3.9452 68.1877 1.9513 67.1847 0.798427C66.1793 -0.360746 64.6469 -0.244199 63.7532 1.05987Z"
                  fill="white"
                />
              </svg>
            </div>
            <img src={payment} alt="payment method" style={{ width: "100%" }} />
          </div>
        );
      }
      return (
        <div
          style={Styles.paymentMethod}
          onClick={() => this.onPaymentMethodSelected(i)}
        >
          <img src={payment} alt="payment method" style={{ width: "100%" }} />
        </div>
      );
    });
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
          <p
            style={{
              width: "291px",

              fontSize: "17px",
              color: "#060407",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Chiến dịch mùa hè xanh 2020 chặng 1
          </p>
          {/* <div style={Styles.communityInfo}>
            <div
              style={{
                fontWeight: "500",
                color: "#090404",
                marginLeft: "70px",
              }}
            >
              <p style={{ fontSize: "24px", marginBottom: "2px" }}>
                Target : 100 đơn vị
              </p>
              <p style={{ fontSize: "18px", marginBottom: "2px" }}>
                Hoàn thành 40%
              </p>
              <p style={{ fontSize: "13px", marginBottom: "2px" }}>6 members</p>
            </div>
          </div> */}
          <div style={Styles.separator}></div>
          <p
            style={{
              width: "291px",

              fontSize: "17px",
              color: "#060407",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Mã cây : {treeId}
          </p>
        </div>
        {this.state.paymentComponent === false ? (
          <div>
            <div
              style={{
                marginLeft: "7%",
                width: "1108px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  width: "421px",
                  height: "55px",
                  background: "#D8D8D8",
                  border: "1px solid #979797",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  marginTop: "33px",
                  marginBottom: "36px",
                  cursor: "pointer",
                }}
              >
                SORT: STATUS+/TRACK COUNT
              </p>
            </div>
            <div style={Styles.storyContainer}>
              <TreeCard done={true}></TreeCard>
              <TreeCard done={false}></TreeCard>
              <TreeCard done={true}></TreeCard>
              <TreeCard done={false}></TreeCard>
              <TreeCard done={true}></TreeCard>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1108px",
                marginLeft: "7%",
                marginBottom: "50px",
              }}
            >
              <button style={Styles.loadMoreBtn}>Load more</button>
            </div>
          </div>
        ) : (
          <div>
            <div style={Styles.communityDescription}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "17px",
                  width: "356px",
                  height: "340px",
                }}
              >
                <img src={contact} alt="contact"></img>
              </div>

              <div
                style={{
                  width: "545px",
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "#4A4A4A",
                  marginLeft: "100px",
                }}
              >
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Contact Information
                </p>
                <p>
                  Số điện thoại: 034454333 <br />
                  Mail : congdongltv@gmail.com
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "100px",
              }}
            >
              <div style={Styles.paymentContainer}>
                <p style={Styles.paymentHeader}>Cùng giúp chúng tôi một tay </p>
                <div style={Styles.underline}></div>
                <p style={Styles.paymentTitle}>Phương thức thanh toán</p>
                <div style={Styles.paymentMethodContainer}>
                  {paymentMethods}
                </div>
                <div style={Styles.inputName} class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="donateInput"
                    aria-describedby="donateInput"
                    name="donateInput"
                    placeholder="Số tiền đóng góp"
                    onChange={this.handleForm}
                    value={this.state.donateInput}
                  />
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginTop: "50px",
                  }}
                >
                  Kêt thúc chiến dịch: 12/12/2021
                </p>
                <p style={{ fontSize: "18px", fontWeight: "500" }}>
                  Mục tiêu : 1.000.000 vnd{" "}
                </p>
                <div
                  class="form-check"
                  style={{
                    marginTop: "35px",
                    marginLeft: "13px",
                    marginBottom: "30px",
                  }}
                >
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    checked={this.state.isCheck}
                    onChange={this.handleForm}
                    name="isCheck"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Tôi đồng ý với những quy định mà BIOVE đưa ra.{" "}
                    <a href="#">Link to policies</a>
                  </label>
                </div>
                <div style={Styles.btnContainer}>
                  <button
                    onClick={() => {
                      this.setState({
                        donateValue: this.state.donateInput,
                        btnFirstClick:true
                      });
                      console.log(this.state.donateValue);
                    }}
                    style={Styles.QRBtn}
                  >
                    Lấy mã QR
                  </button>
                  <button style={Styles.shareBtn}>Đi đến kiểm kê ủng hộ</button>
                </div>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  background: "#DEDEDE",
                  marginLeft: "100px",
                  marginTop: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >{(this.state.isCheck===false&&this.state.btnFirstClick===undefined)?<p>Nhấn xác nhận trước khi lấy mã</p>:
                <QRCode
                  style={{ width: "100%", height: "100%" }}
                  value={`2|99|0933795724|TRAN QUOC THINH|phutucthinh0@gmail.com|0|0|${this.state.donateValue}`}
                />}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(TreeDonate);
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
    justifyContent: "space-between",
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
    marginRight: "10px",
  },
  communityInfo: {
    background: "#FF9E6F",
    height: "100%",
    width: "405px",
    borderRadius: "48px",
    display: "flex",
    alignItems: "center",
    marginLeft: "85px",
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
  communityDescription: {
    display: "flex",
    marginLeft: "200px",
    marginTop: "73px",
    alignItems: "center",
  },
  paymentContainer: {
    marginLeft: "250px",
    marginTop: "100px",
  },
  paymentHeader: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#187C1D",
    marginBottom: "8px",
  },
  underline: {
    width: "185px",
    height: "2px",
    background: "#187C1D",
    marginBottom: "32px",
  },
  paymentMethodContainer: {
    display: "flex",
    marginTop: "30px",
    marginLeft: "60px",
    gap: "60px",
    marginBottom: "30px",
  },
  paymentMethod: {
    height: "61px",
    width: "61px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    borderRadius: "5px",
  },

  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    background: "rgba(0,0,0,.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  minimumPayment: {
    width: "537px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "13px",
  },
  minimumPaymentText: {
    marginBottom: "0",
    fontSize: "19px",
    fontWeight: "500",
    color: "#0C0C0C",
  },
  minimumPaymentBox: {
    width: "226px",
    height: "46px",
    fontSize: "13px",
    borderRadius: "3px",
    border: "1px solid #D07474",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    marginLeft: "13px",
    display: "flex",
    gap: "20px",
  },
  QRBtn: {
    width: "168px",
    height: "50px",
    borderRadius: "3px",
    background: "#FF5200",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
  },
  shareBtn: {
    width: "202px",
    height: "50px",
    borderRadius: "3px",
    background: "transparent",
    color: "#FF5200",
    fontSize: "14px",
    fontWeight: "500",
    border: "1px solid #FF5200",
  },
  inputName: {
    width: "326px",
    height: "46px",
  },

  profileInformationFormLabel: {
    fontSize: "14px",
    color: "#3B3B3B",
    fontWeight: "500",
    marginBottom: "7px",
  },
  paymentTitle: {
    fontSize: "24px",
    fontWeight: "500",
  },
};
