import React, { Component } from "react";
import BioveAngelComponent from "../Components/BioveAngelComponent";
import GalleryItemLong from "../Components/GalleryItemLong";
import GalleryItemShort from "../Components/GalleryItemShort";
import shortImage from "../assets/shortItem.png";
import longImage from "../assets/longItem.png";
import * as planting_api from "../apis/planting.api";
import { withRouter } from "react-router-dom";
import GalleryLoading from "../Components/GalleryLoading"
class BioveAngelCommunities extends Component {
  state = {
    communities: [],
    loading:false
  };
  componentDidMount() {
    this.setState({
      loading:true
    })
    planting_api.getCommunities().then((data) => {
      if (data.message) {
      } else {
        this.setState({
          communities: data,
        });
      }
      this.setState({
        loading:false
      })
    });
  }
  onCommunityClick = (community_id) => {
    this.props.history.push("/angel/" + community_id);
  };
  renderCommunities=()=>{
      if(this.state.communities.length===0){

      } else {
          return this.state.communities.map((community, i) => {
            if (community.name.includes("BIOVE")) {
              return (
                <GalleryItemLong
                  handleClick={() => this.onCommunityClick(community._id)}
                  page={0}
                  title={community.name}
                  image={community.avatar}
                />
              );
            }
            return (
              <GalleryItemShort
                handleClick={() => this.onCommunityClick(community._id)}
                page={0}
                title={community.name}
                image={community.avatar}
              />
            );
          });
      }
  }
  render() {
    const communities = this.renderCommunities()
    return (
      <div>
        <BioveAngelComponent pageSelected={0}>
          {communities}
          {this.state.loading&&<GalleryLoading></GalleryLoading>}
        </BioveAngelComponent>
      </div>
    );
  }
}
export default withRouter(BioveAngelCommunities);
