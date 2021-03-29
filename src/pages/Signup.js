import React, { Component } from "react";
import Navbar from "../Components/Navbar";
export default class Signup extends Component {
  days = [];
  months = [];
  years = [];
  addDates = () => {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }
    for (let i = 2021; i >= 1900; i--) {
      this.years.push(i);
    }
  };
  render() {
    this.addDates();
    const selectDays = this.days.map((x) => (
      <option value={"" + x}>{x}</option>
    ));
    const selectMonths = this.months.map((x) => (
      <option value={"" + x}>{x}</option>
    ));
    const selectYears = this.years.map((x) => (
      <option value={"" + x}>{x}</option>
    ));

    return (
      <div>
        <div style={Styles.loginContainer}>
          <p style={Styles.signInText}>Create Account</p>
          <div style={Styles.signInSocialNetworkContainer}>
            <button
              style={{
                ...Styles.signInSocialNetworkButton,
                ...Styles.signInFacebook,
              }}
            >
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.998 16H2V8H0V5.24297L2 5.24206L1.99675 3.61781C1.99675 1.36856 2.60666 0 5.25612 0H7.462V2.75756H6.08341C5.05166 2.75756 5.00203 3.14281 5.00203 3.862L4.99794 5.24206H7.4775L7.18519 7.99909L5 8L4.998 16Z"
                  fill="white"
                />
              </svg>
              <div style={Styles.verticalSeparator}></div>
              <p style={Styles.signInSocialNetworkText}>
                Sign Up with Facebook
              </p>
            </button>
            <button
              style={{
                ...Styles.signInSocialNetworkButton,
                ...Styles.signInGoogle,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.4V9.6H12.5264C11.8656 11.4624 10.0864 12.8 8 12.8C5.3536 12.8 3.2 10.6464 3.2 8C3.2 5.3536 5.3536 3.2 8 3.2C9.1472 3.2 10.2512 3.6112 11.1088 4.3584L13.2112 1.9456C11.7712 0.6912 9.9216 0 8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8V6.4H8Z"
                  fill="white"
                />
              </svg>

              <div style={Styles.verticalSeparator}></div>
              <p style={Styles.signInSocialNetworkText}>Sign Up with Google</p>
            </button>
          </div>
          <div style={Styles.horizontalSeparatorContainer}>
            <div style={Styles.horizontalSeparator}></div>
            <p style={Styles.horizontalSeparatorText}>OR</p>
            <div style={Styles.horizontalSeparator}></div>
          </div>
          <div style={Styles.formContainer}>
            <form style={Styles.form}>
              <div style={Styles.inputNameContainer}>
                <div style={Styles.inputName} class="mb-3">
                  <label for="inputFirstName" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputFirstName"
                    aria-describedby="firstNameInput"
                    placeholder="Enter first name"
                  />
                </div>
                <div style={Styles.inputName} class="mb-3">
                  <label for="inputLastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputLastName"
                    aria-describedby="LastNameInput"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div style={Styles.formSeparator}></div>
              <div style={{ position: "relative" }} class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Create password"
                />
                <button style={Styles.showPasswordButton}>Show password</button>
              </div>
              <div style={Styles.formSeparator}></div>

              <label class="form-label">Date Of Birth</label>
              <div style={Styles.dateOfBirthContainer}>
                <select style={Styles.dateOfBirthSelect} class="form-select" aria-label="Day Select">
                  <option disabled selected>Day</option>
                  {selectDays}
                </select>
                <select style={Styles.dateOfBirthSelect} class="form-select" aria-label="Month Select">
                  <option disabled selected>Month</option>
                  {selectMonths}
                </select>
                <select style={Styles.dateOfBirthSelect} class="form-select" aria-label="Year Select">
                  <option disabled selected>Year</option>
                  {selectYears}
                </select>
              </div>

              <div style={Styles.formSeparator}></div>
              <div style={Styles.passwordCheckContainer}>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    I have read and agree to the{" "}
                    <a style={Styles.signUpLink} href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div style={Styles.formSeparator}></div>
              <button type="submit" style={Styles.SignInSubmitButton}>
                Sign Up
              </button>
            </form>
          </div>
          <p style={Styles.signUpText}>
            Already have an Account?{" "}
            <a style={Styles.signUpLink} href="#">
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const Styles = {
  navbarContainer: {
    width: "100%",
    backgroundColor: "#3A3232",
  },
  signInText: {
    fontSize: "70px",
    fontWeight: "500",
    marginTop: "4%",
    textAlign: "center",
  },
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  signInSocialNetworkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signInSocialNetworkButton: {
    borderRadius: "3px",
    width: "262px",
    height: "50px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signInFacebook: {
    backgroundColor: "#3B5998",
  },
  signInGoogle: {
    backgroundColor: "#DB3236",
    marginLeft: "20px",
  },
  verticalSeparator: {
    backgroundColor: "#4A4A4A",
    width: "1px",
    height: "20px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  signInSocialNetworkText: {
    fontSize: "14px",
    color: "white",
    marginBottom: "0",
  },
  horizontalSeparatorContainer: {
    marginTop: "20px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalSeparator: {
    backgroundColor: "#D8D8D8",
    width: "252px",
    height: "1px",
  },
  horizontalSeparatorText: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "0",
    marginLeft: "10px",
    marginRight: "10px",
    color: "#4A4A4A",
  },
  formContainer: {
    width: "544px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
  },
  formSeparator: {
    marginTop: "25px",
  },
  showPasswordButton: {
    border: "none",
    backgroundColor: "white",
    position: "absolute",
    top: "42px",
    right: "5px",
    color: "#4A90E2",
    fontSize: "12px",
  },
  passwordCheckContainer: {
    display: "flex",
    alignItems: "center",
  },
  SignInSubmitButton: {
    border: "none",
    color: "white",
    backgroundColor: "#FF5200",
    width: "544px",
    height: "50px",
    fontWeight: "500",
    fontSize: "14px",
  },
  signUpText: {
    display: "block",
    marginTop: "30px",
    marginBottom: "10%",
  },
  signUpLink: {
    textDecoration: "none",
    color: "#4A90E2",
  },
  inputNameContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputName: {
    width: "262px",
  },
  dateOfBirthContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  dateOfBirthSelect:{
      width:"170px"
  }
};
