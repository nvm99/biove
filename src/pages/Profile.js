import React, { Component } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import MyCampaignComponent from "../Components/MyCampaignComponent";
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
      // <div>
      //   <MyCampaignComponent></MyCampaignComponent>
      // </div>
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
