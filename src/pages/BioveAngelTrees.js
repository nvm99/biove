import React, { Component } from "react";
import BioveAngelComponent from "../Components/BioveAngelComponent";
import GalleryItemLong from "../Components/GalleryItemLong";
import GalleryItemShort from "../Components/GalleryItemShort";
import shortImage from "../assets/shortItem.png";
import longImage from "../assets/longItem.png";
import * as planting_api from "../apis/planting.api";
import { withRouter } from "react-router-dom";
import GalleryLoading from "../Components/GalleryLoading"
class BioveAngelTrees extends Component {
  state = {
    trees: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const campaign_id = this.props.location.pathname.split("/")[3];
    planting_api.getTrees(campaign_id).then((data) => {
      if (data.message) {
      } else {
        this.setState({
          trees: data,
        });
      }
      this.setState({
        loading: false,
      });
    });
  }
  onTreeClick = (tree_id) => {
    this.props.history.push("/donate/" + tree_id);
  };
  renderTrees = () => {
    if (this.state.trees.length === 0) {
    } else {
      return this.state.trees.map((tree, i) => {
        if (tree.name === "BIOVE") {
          return (
            <GalleryItemLong
              handleClick={() => this.onTreeClick(tree._id)}
              page={1}
              title={tree.name}
              image={tree.thumbnail}
            />
          );
        }
        return (
          <GalleryItemShort
            handleClick={() => this.onTreeClick(tree._id)}
            page={1}
            title={tree.name}
            image={tree.thumbnail}
          />
        );
      });
    }
  };
  render() {
    const trees = this.renderTrees();
    return (
      <div>
        <BioveAngelComponent pageSelected={2}>
          {trees}
          {this.state.loading && <GalleryLoading></GalleryLoading>}
        </BioveAngelComponent>
      </div>
    );
  }
}
export default withRouter(BioveAngelTrees);
