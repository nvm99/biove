import React, { Component } from "react";
import avatarMenu from "../assets/avatarMenu.png";

export default class Navbar extends Component {
  render() {
    return (
      <div style={Styles.paddingVertical}>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid" >
            <a class="navbar-brand" href="#" style={Styles.marginLeftMed}>
              BIOVE
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div
                class="ms-auto align-items-center navbar-nav"
                style={Styles.marginRightULg}
              >
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a class="nav-link active" aria-current="page" href="#">
                  Planting
                </a>
                <a
                  style={{ ...Styles.btnLanguage, ...Styles.marginRightMed }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Language: Vietnam
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <div class="dropdown">
                  <a
                    style={Styles.dropdownProfile}
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div
                      style={{
                        ...Styles.avatarContainer,
                        ...Styles.marginLeftMed,
                      }}
                    >
                      <img
                        style={Styles.avatarStyle}
                        src={avatarMenu}
                        alt="avatar Menu"
                      ></img>
                    </div>
                    <svg
                      style={Styles.marginLeftSm}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="white"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Your trees
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Notifications
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const Styles = {
  
  btnLanguage: {
    fontSize: "13px",
    display: "flex",
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "40px",
    backgroundColor: "#01A78E",
    borderRadius: "20px",
    marginLeft: "80px",
  },
  avatarContainer: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundColor: "#FEFEFE",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarStyle: { width: "100%" },
  marginRightMed: {
    marginRight: "20px",
  },
  marginLeftMed: {
    marginLeft: "20px",
  },
  marginLeftSm: {
    marginLeft: "10px",
  },
  marginRightULg: {
    marginRight: "120px",
  },
  paddingVertical: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  dropdownProfile: {
    display: "flex",
    alignItems: "center",
  },
};
