import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import momo from "../../src/assets/momo.png";
import zalopay from "../../src/assets/zalopay.png";

export default class Payment extends Component {
  state = {
    communityInput: "",
    campaignInput: "",
    emailInput: "",
    phoneInput: "",
    sponsorInput: "",
    locationInput: "",
    descriptionInput: "",
    paymentMethods: [momo, zalopay],
    paymentSelected: 0,
  };

  handleForm = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  onPaymentMethodSelected = (i) => {
    this.setState({
      paymentSelected: i,
    });
  };
  render() {
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
      <div style={{ paddingBottom: "100px" }}>
        <div style={Styles.sideHeroImage}></div>
        <div style={{ marginLeft: "7%", marginTop: "66px" }}>
          <p style={Styles.paymentHeader}>1. Thông tin chung</p>
          <div style={Styles.underline}></div>
          <p style={Styles.paymentTitle}>Vị trí thực hiện chiến dịch</p>

          <form style={{ marginBottom: "45px" }}>
            <div style={Styles.inputNameContainer}>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="communityInput"
                  class="form-label"
                >
                  Tên cộng đồng*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="communityInput"
                  aria-describedby="communityInput"
                  placeholder="Tên cộng đồng"
                  name="communityInput"
                  onChange={this.handleForm}
                  value={this.state.communityInput}
                />
              </div>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="campaignInput"
                  class="form-label"
                >
                  Tên chiến dịch*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="campaignInput"
                  aria-describedby="campaignInput"
                  name="campaignInput"
                  placeholder="Tên chiến dịch"
                  onChange={this.handleForm}
                  value={this.state.campaignInput}
                />
              </div>
            </div>
            <div style={Styles.inputContactContainer}>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="sponsorInput"
                  class="form-label"
                >
                  Tên đơn vị bảo trợ
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="sponsorInput"
                  aria-describedby="sponsorInput"
                  placeholder="Tên đơn vị bảo trợ"
                  name="sponsorInput"
                  onChange={this.handleForm}
                  value={this.state.sponsorInput}
                />
              </div>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="inputPhone"
                  class="form-label"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPhone"
                  aria-describedby="phoneInput"
                  name="phoneInput"
                  placeholder="Số điện thoại"
                  onChange={this.handleForm}
                  value={this.state.phoneInput}
                />
              </div>
            </div>
            <div style={Styles.inputContactContainer}>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="inputEmail"
                  class="form-label"
                >
                  Email*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail"
                  aria-describedby="emailInput"
                  placeholder="Email"
                  name="emailInput"
                  onChange={this.handleForm}
                  value={this.state.emailInput}
                />
              </div>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="locationInput"
                  class="form-label"
                >
                  Vị trí trồng cây
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="locationInput"
                  aria-describedby="locationInput"
                  name="locationInput"
                  placeholder="Tỉnh x huyện Y"
                  onChange={this.handleForm}
                  value={this.state.locationInput}
                />
              </div>
            </div>
            <div style={Styles.inputContactContainer}>
              <div style={Styles.inputName} class="mb-3">
                <label
                  style={Styles.profileInformationFormLabel}
                  for="descriptionInput"
                  class="form-label"
                >
                  Mô tả
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="descriptionInput"
                  aria-describedby="descriptionInput"
                  placeholder="Mô tả chi tiết lý do"
                  name="descriptionInput"
                  onChange={this.handleForm}
                  value={this.state.descriptionInput}
                />
              </div>
            </div>
          </form>

          <p style={Styles.paymentHeader}>2. Cách Thanh Toán</p>
          <div style={Styles.underline}></div>
          <p style={Styles.paymentTitle}>Phương thức thanh toán hỗ trợ</p>
          <div style={Styles.paymentMethodContainer}>{paymentMethods}</div>
          <div style={Styles.minimumPayment}>
            <p style={Styles.minimumPaymentText}>Số tiền đóng góp tối thiểu</p>
            <div style={Styles.minimumPaymentBox}>10.000 vnd</div>
          </div>
          <div style={Styles.minimumPayment}>
            <p style={Styles.minimumPaymentText}>
              Mã chuyển khoản của giao dịch:
            </p>
            <div style={Styles.minimumPaymentBox}>
              Máy sẽ tự tìm gen ra 1 key unique
            </div>
          </div>
          <p style={{ fontSize: "18px", fontWeight: "500", marginTop: "50px" }}>
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
            <button style={Styles.QRBtn}>Lấy mã QR</button>
            <button style={Styles.shareBtn}>Chia sẻ lên Facebook</button>
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
  paymentHeader: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#187C1D",
    marginBottom: "8px",
  },
  underline: {
    width: "125px",
    height: "2px",
    background: "#187C1D",
    marginBottom: "32px",
  },
  paymentTitle: {
    fontSize: "24px",
    fontWeight: "500",
  },
  inputNameContainer: {
    display: "flex",
    gap: "20px",
  },
  inputContactContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
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
};
