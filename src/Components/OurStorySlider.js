import React, { Component } from "react";
import Carousel from "../Components/Carousel";

export default class OurStorySlider extends Component {
  render() {
    return (
      <div style={Styles.sliderContainer}>
        <p
          style={{
            color: "#9B9B9B",
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: "9%",
            marginBottom: "47px",
          }}
        >
          OUR STORY
        </p>
        <div style={Styles.sliderTextContainer}>
          <p style={Styles.sliderTextHead}>
            A short Story on How BIOVE Came To be
          </p>
          <div style={Styles.sliderTextDescriptionContainer}>
            <p style={Styles.sliderTextDescription}>
              If you live in New York City or travel to and from New York City a
              lot, you know all about the traffic there. Getting places is often
              next to impossible, even with the gazillion yellow cabs. If you’re
              like me you often look with envy at those shiny limousines with
              their unformed drivers and wish you could sit in one. Well, you
              can. New York limo service is more affordable than you think,
              whether it’s for Newark airport transportation, LaGuardia airport
              transportation, or to drive wherever you wish to go.
            </p>
            <p style={Styles.sliderTextDescription}>
              The rules of travel have altered so much in the last few years,
              with strict regulation regarding air travel, questionable car
              searches that may vary in regulation from state to state, and the
              feeling of never really being ultimately sure what is appropriate
              or improper in the travel world any longer. In most cases, if you
              decide to fly the formerly affable skies, your airline or airport
              website will have an accurate and up to date list regarding what
              is okay and what is not okay regarding your luggage. As if packing
              for a trip wasnt difficult enough, now we all have to do it with
              cloudy and blurry regulations and a list we print out from the
              airlines.
            </p>
          </div>
        </div>
        <Carousel page="about"></Carousel>
        
      </div>
    );
  }
}

const Styles = {
  sliderContainer: {
    backgroundColor: "white",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
  sliderTextContainer: {
    marginLeft: "9%",
    display: "flex",
    marginBottom: "40px",
  },
  sliderTextHead: {
    fontSize: "50px",
    fontWeight: "500",
    display: "block",
    width: "28%",
  },
  sliderTextDescriptionContainer: {
    width:"60%",
    marginLeft: "50px",
    marginTop: "30px",
    display: "flex",
    gap: "20px",
  },
  sliderTextDescription: {
      width:"45%",
    fontSize: "13px",
    fontWeight: "400",
  },
  sliderTextLink: {
    color: "#4A90E2",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "-20px",
    display: "block",
    textDecoration: "none",
  },
  

};
