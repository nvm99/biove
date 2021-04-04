import React, { Component } from "react";
import BioveAngelComponent from "../Components/BioveAngelComponent";
import GalleryItemLong from "../Components/GalleryItemLong";
import GalleryItemShort from "../Components/GalleryItemShort";
import shortImage from "../assets/shortItem.png";
import longImage from "../assets/longItem.png";
import * as planting_api from "../apis/planting.api";
import { withRouter } from "react-router-dom";
import GalleryLoading from "../Components/GalleryLoading";
class BioveAngelCampaigns extends Component {
  state = {
    campaigns: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const community_id = this.props.location.pathname.split("/")[2];
    planting_api.getCampaigns(community_id).then((data) => {
      if (data.message) {
      } else {
        this.setState({
          campaigns: data,
        });
      }
      this.setState({
        loading: false,
      });
    });
  }
  onCampaignClick = (campaign_id) => {
    const community_id = this.props.location.pathname.split("/")[2];
    this.props.history.push("/angel/" + community_id + "/" + campaign_id);
  };
  renderCampaigns = () => {
    if (this.state.campaigns.length === 0) {
    } else {
      return this.state.campaigns.map((campaign, i) => {
        if (campaign.name.includes("BIOVE")) {
          return (
            <GalleryItemLong
              handleClick={() => this.onCampaignClick(campaign._id)}
              page={1}
              title={campaign.name}
              image={longImage}
            />
          );
        }
        return (
          <GalleryItemShort
            handleClick={() => this.onCampaignClick(campaign._id)}
            page={1}
            title={campaign.name}
            image={shortImage}
          />
        );
      });
    }
  };
  render() {
    const campaigns = this.renderCampaigns();
    return (
      <div>
        <BioveAngelComponent pageSelected={1}>
          {campaigns}
          {this.state.loading && <GalleryLoading></GalleryLoading>}
        </BioveAngelComponent>
      </div>
    );
  }
}

export default withRouter(BioveAngelCampaigns);
