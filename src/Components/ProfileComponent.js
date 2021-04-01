import React, { Component } from "react";
import avatarMenu from "../assets/avatarMenu.png";
import profileImage from "../assets/profileImage.png";

export default class ProfileComponent extends Component {
  state={
    firstNameInput:"",
    lastNameInput:"",
    emailInput:"",
    phoneInput:"",
    facebookInput:"",
    twitterInput:"",
    currentPassword:"",
    newPassword:""
  }
  handleForm=(evt)=>{
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }
  render() {
    return (
      <div style={Styles.profileComponentContainer}>
        <div style={Styles.profileInformationContainer}>
          <div style={Styles.profileTitleContainer}>
            <div style={Styles.profileTitleIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6168 9.43631C12.7484 9.82678 13.7855 10.4718 14.6569 11.3431C16.1678 12.8542 17 14.8631 17 17H15.75C15.75 13.278 12.722 10.25 9 10.25C5.27803 10.25 2.25 13.278 2.25 17H1C1 14.8631 1.83216 12.8542 3.34316 11.3431C4.2145 10.4718 5.25163 9.82678 6.38319 9.43631C5.17122 8.60159 4.375 7.20463 4.375 5.625C4.375 3.07478 6.44978 1 9 1C11.5502 1 13.625 3.07478 13.625 5.625C13.625 7.20463 12.8288 8.60159 11.6168 9.43631ZM5.625 5.625C5.625 7.486 7.13903 9 9 9C10.861 9 12.375 7.486 12.375 5.625C12.375 3.764 10.861 2.25 9 2.25C7.13903 2.25 5.625 3.764 5.625 5.625Z"
                  fill="#FF5200"
                />
                <path
                  d="M14.6569 11.3431L14.8337 11.1664L14.8336 11.1663L14.6569 11.3431ZM11.6168 9.43631L11.475 9.23042L11.0674 9.51118L11.5353 9.67264L11.6168 9.43631ZM17 17V17.25H17.25V17H17ZM15.75 17H15.5V17.25H15.75V17ZM2.25 17V17.25H2.5V17H2.25ZM1 17H0.75V17.25H1V17ZM3.34316 11.3431L3.16638 11.1663L3.16638 11.1664L3.34316 11.3431ZM6.38319 9.43631L6.46474 9.67264L6.93264 9.51118L6.52499 9.23042L6.38319 9.43631ZM14.8336 11.1663C13.9356 10.2683 12.8659 9.60287 11.6984 9.19999L11.5353 9.67264C12.6309 10.0507 13.6355 10.6753 14.4801 11.5199L14.8336 11.1663ZM17.25 17C17.25 14.7968 16.3915 12.7243 14.8337 11.1664L14.4801 11.5199C15.9442 12.984 16.75 14.9294 16.75 17H17.25ZM15.75 17.25H17V16.75H15.75V17.25ZM9 10.5C12.5839 10.5 15.5 13.4161 15.5 17H16C16 13.14 12.86 10 9 10V10.5ZM2.5 17C2.5 13.4161 5.4161 10.5 9 10.5V10C5.13996 10 2 13.14 2 17H2.5ZM1 17.25H2.25V16.75H1V17.25ZM3.16638 11.1664C1.6085 12.7243 0.75 14.7968 0.75 17H1.25C1.25 14.9294 2.05582 12.984 3.51993 11.5199L3.16638 11.1664ZM6.30164 9.19999C5.1341 9.60287 4.06444 10.2683 3.16638 11.1663L3.51993 11.5199C4.36456 10.6753 5.36915 10.0507 6.46474 9.67264L6.30164 9.19999ZM4.125 5.625C4.125 7.29064 4.96484 8.76301 6.24138 9.64221L6.52499 9.23042C5.3776 8.44018 4.625 7.11861 4.625 5.625H4.125ZM9 0.75C6.31171 0.75 4.125 2.93671 4.125 5.625H4.625C4.625 3.21285 6.58785 1.25 9 1.25V0.75ZM13.875 5.625C13.875 2.93671 11.6883 0.75 9 0.75V1.25C11.4121 1.25 13.375 3.21285 13.375 5.625H13.875ZM11.7587 9.6422C13.0352 8.76301 13.875 7.29064 13.875 5.625H13.375C13.375 7.11861 12.6224 8.44018 11.475 9.23042L11.7587 9.6422ZM9 8.75C7.2771 8.75 5.875 7.34793 5.875 5.625H5.375C5.375 7.62407 7.00096 9.25 9 9.25V8.75ZM12.125 5.625C12.125 7.34793 10.7229 8.75 9 8.75V9.25C10.999 9.25 12.625 7.62407 12.625 5.625H12.125ZM9 2.5C10.7229 2.5 12.125 3.90207 12.125 5.625H12.625C12.625 3.62593 10.999 2 9 2V2.5ZM5.875 5.625C5.875 3.90207 7.2771 2.5 9 2.5V2C7.00096 2 5.375 3.62593 5.375 5.625H5.875Z"
                  fill="#FF5200"
                />
              </svg>
            </div>
            <p style={Styles.profileTitleText}>Profile</p>
          </div>
          <div style={Styles.profileEditContainer}>
            <div style={Styles.profileImage}>
              <img
                style={Styles.profileImageStyle}
                src={profileImage}
                alt="profile image"
              ></img>
            </div>
            <div style={Styles.profileAvatarAndEditBtnContainer}>
              <div style={Styles.profileAvatar}>
                <img
                  style={Styles.avatarStyle}
                  src={avatarMenu}
                  alt="avatar Menu"
                ></img>
              </div>
              <p style={Styles.profileName}>Cory Carlson</p>
              <button style={Styles.profileEditBtn}>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2857 0H1.71428C0.767511 0 0 0.805887 0 1.8V10.2C0 11.1941 0.767511 12 1.71428 12H14.2857C15.2325 12 16 11.1941 16 10.2V1.8C16 0.805887 15.2325 0 14.2857 0ZM14.8571 10.2C14.8571 10.5314 14.6013 10.8 14.2857 10.8H1.71428C1.39868 10.8 1.14285 10.5314 1.14285 10.2V9.8484L3.42857 7.44839L5.3103 9.4242C5.53342 9.65845 5.89516 9.65845 6.11829 9.4242L10.8571 4.44839L14.8572 8.64841V10.2H14.8571ZM11.2611 3.17581L14.8571 6.95159H14.8572V1.8C14.8572 1.46862 14.6013 1.19999 14.2857 1.19999H1.71428C1.39868 1.19999 1.14285 1.46862 1.14285 1.8V8.15158L3.02457 6.17576C3.2477 5.94152 3.60944 5.94152 3.83256 6.17576L5.71429 8.15158L10.4532 3.17581C10.6763 2.94156 11.038 2.94156 11.2611 3.17581Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 4.5C4 3.67157 4.67157 3 5.5 3C6.32843 3 7 3.67157 7 4.5C7 5.32843 6.32843 6 5.5 6C4.67157 6 4 5.32843 4 4.5ZM4.99999 4.5C4.99999 4.77615 5.22385 5.00001 5.5 5.00001C5.77615 5.00001 6.00001 4.77615 6.00001 4.5C6.00001 4.22385 5.77615 3.99999 5.5 3.99999C5.22385 3.99999 4.99999 4.22385 4.99999 4.5Z"
                    fill="white"
                  />
                </svg>
                <p style={Styles.profileEditBtnText}>Edit</p>
              </button>
            </div>
          </div>
          <div style={Styles.profileInformationFormContainer}>
            <p style={Styles.profileInformationFormText}>Profile Information</p>
            <form style={Styles.form}>
              <div style={Styles.inputNameContainer}>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileInformationFormLabel}
                    for="inputFirstName"
                    class="form-label"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputFirstName"
                    aria-describedby="firstNameInput"
                    placeholder="Enter first name"
                    name="firstNameInput"
                    value={this.state.firstNameInput}
                  />
                </div>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileInformationFormLabel}
                    for="inputLastName"
                    class="form-label"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputLastName"
                    aria-describedby="lastNameInput"
                    name="lastNameInput"
                    placeholder="Enter last name"
                    value={this.state.lastNameInput}
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
                    placeholder="Enter email"
                    name="emailInput"
                    value={this.state.emailInput}
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
                    placeholder="Enter phone number"
                    value={this.state.phoneInput}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            style={{
              ...Styles.profileInformationFormContainer,
              ...Styles.noBorderBottom,
            }}
          >
            <p style={Styles.profileInformationFormText}>Social Media</p>
            <form style={Styles.form}>
              <div style={Styles.inputNameContainer}>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileSocialMediaFormLabel}
                    for="facebookURL"
                    class="form-label"
                  >
                    Facebook URL
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="facebookURL"
                    aria-describedby="facebook URL"
                    name="facebookInput"
                    placeholder="Enter facebook URL"
                    value={this.state.facebookInput}
                  />
                </div>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileSocialMediaFormLabel}
                    for="twitterURL"
                    class="form-label"
                  >
                    Twitter URL
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="twitterURL"
                    aria-describedby="twitter URL"
                    name="twitterInput"
                    placeholder="Enter twitter URL"
                    value={this.state.twitterInput}
                  />
                </div>
              </div>
            </form>
            <button style={Styles.formSubmitBtn}>Save changes</button>
          </div>
        </div>
        <div style={Styles.profilePasswordContainer}>
          <div
            style={{
              ...Styles.profileInformationFormContainer,
              ...Styles.noBorderBottom,
            }}
          >
            <p style={Styles.profileInformationFormText}>Change Password</p>
            <form style={Styles.form}>
              <div style={Styles.inputNameContainer}>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileSocialMediaFormLabel}
                    for="currentPassword"
                    class="form-label"
                  >
                    Current Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="currentPassword"
                    aria-describedby="current password"
                    placeholder="Enter current password"
                    name="currentPassword"
                    value={this.state.currentPassword}
                  />
                </div>
                <div style={Styles.inputName} class="mb-3">
                  <label
                    style={Styles.profileSocialMediaFormLabel}
                    for="newPassword"
                    class="form-label"
                  >
                    New Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="newPassword"
                    aria-describedby="new password"
                    placeholder="Enter new password"
                    name="newPassword"
                    value={this.state.newPassword}
                  />
                </div>
              </div>
            </form>
            <button style={Styles.formSubmitBtn}>Change Password</button>
          </div>
        </div>
        <button style={Styles.deleteAccountButton}>Delete My Account</button>
      </div>
    );
  }
}
const Styles = {
  profileInformationContainer: {
    width: "733px",
    height: "808px",
    border: "1px solid #E4E4E4",
  },
  profilePasswordContainer: {
    width: "733px",
    height: "254px",
    border: "1px solid #E4E4E4",
    margin: "30px 0",
  },
  deleteAccountButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    width: "168px",
    height: "50px",
    borderRadius: "3px",
    border: "none",
    background: "#FF0000",
  },
  profileTitleContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 30px",
    borderBottom: "1px solid #E4E4E4",
  },
  profileTitleIcon: {
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 82, 0, 0.4)",
  },
  profileAvatar: {
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    backgroundColor: "#FEFEFE",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarStyle: { width: "100%" },
  profileTitleText: {
    fontSize: "14px",
    color: "#FF5200",
    marginBottom: "0",
    marginLeft: "20px",
  },
  profileEditContainer: {
    height: "240px",
    borderBottom: "1px solid #E4E4E4",
    padding: "20px 30px",
  },
  profileImage: {
    width: "673px",
    height: "200px",
    borderRadius: "3px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageStyle: {
    width: "100%",
  },
  profileName: {
    color: "white",
    fontSize: "16px",
    marginBottom: "0",
    marginLeft: "15px",
  },
  profileAvatarAndEditBtnContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "-65px",
    marginLeft: "20px",
  },
  profileEditBtn: {
    border: "none",
    borderRadius:"3px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FF5200",
    width: "110px",
    height: "40px",
    marginLeft: "370px",
  },
  profileEditBtnText: {
    color: "white",
    marginBottom: "0",
    fontSize: "14px",
    marginLeft: "10px",
  },
  profileInformationFormContainer: {
    padding: "20px 30px",
    height: "243px",
    borderBottom: "1px solid #E4E4E4",
  },
  inputNameContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputContactContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  inputName: {
    width: "326px",
    height: "46px",
  },
  form: {
    width: "100%",
  },
  formSeparator: {
    marginTop: "25px",
  },
  profileInformationFormText: {
    marginBottom: "26px",
    fontSize: "16px",
  },
  profileInformationFormLabel: {
    fontSize: "14px",
    color: "#9B9B9B",
    marginBottom: "7px",
  },
  profileSocialMediaFormLabel: {
    fontSize: "14px",
    color: "#4A4A4A",
    marginBottom: "7px",
  },
  formSubmitBtn: {
    border: "none",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FF5200",
    width: "168px",
    height: "50px",
    borderRadius: "3px",
    color: "white",
    fontWeight: "500",
    fontSize: "14px",
    marginTop: "30px",
  },
  noBorderBottom: {
    borderBottom: "0",
  },
};
