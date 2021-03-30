import React, { Component } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import VerticalNav from "../Components/VerticalNav";

export default class Profile extends Component {
  render() {
    return (
      <div style={Styles.profilePage}>
        <div style={{ marginTop: "15px" }}>
          <VerticalNav></VerticalNav>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <ProfileComponent></ProfileComponent>
        </div>
      </div>
    );
  }
}

const Styles = {
  profilePage: {
    display: "flex",
    justifyContent: "center",
    margin: "110px 0",
  },
};
