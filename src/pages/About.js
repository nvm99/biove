import React, { Component } from "react";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
import OurStorySlider from "../Components/OurStorySlider";
import ceo from "../assets/ceo.png";
import human1 from "../assets/human1.png";
import human2 from "../assets/human2.png";
import human3 from "../assets/human3.png";
import human4 from "../assets/human4.png";
import human5 from "../assets/human5.png";
import Testimonial from "../Components/Testimonial";

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={Styles.sideHeroImage}></div>
        <div style={Styles.contactContainer}>
          <div style={Styles.contactItem}>
            <p style={Styles.contactTitle}>Have a question?</p>
            <p style={Styles.contactEmail}>biove@gmail.com</p>
          </div>
          <div style={Styles.separator}></div>
          <div style={Styles.contactItem}>
            <p style={Styles.contactTitle}>Partner With Us</p>
            <p style={Styles.contactEmail}>biovePatner@yahoo.com</p>
          </div>
        </div>

        <OurStorySlider></OurStorySlider>
        <div style={{ marginLeft: "9%", marginTop: "80px" }}>
          <p
            style={{
              color: "#9B9B9B",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "47px",
            }}
          >
            OUR BELIEFS
          </p>
          <div style={Styles.ourBeliefItem}>
            <p style={Styles.ourBeliefTitle}>Great User Experience</p>
            <p style={Styles.ourBeliefContent}>
              If you live in New York City or travel to and from New York City a
              lot, you know all about the traffic there. Getting places is often
              next to impossible, even with the gazillion yellow cabs. If you’re
              like me you often look with envy at those shiny limousines with
              their unformed drivers and wish you could sit in one. Well, you
              can. New York limo service is more affordable than you think,
              whether it’s for Newark airport transportation, LaGuardia airport
              transportation, or to drive wherever you wish to go.
            </p>
          </div>
          <div style={Styles.ourBeliefItem}>
            <p style={Styles.ourBeliefTitle}>Customer Satisfaction</p>
            <p style={Styles.ourBeliefContent}>
              Initially the concept of timeshare appeared somewhere in the
              1960’s in France. The principle of a timeshare actually marketed
              the concept of ‘buying the hotel’ for vacationing. Indeed,
              timeshare is a form of real estate ownership, more precisely
              vacation property ownership. The owners divide the costs of
              running the resort and also the use of the place between
              themselves. This timeshare concept was first applied to
              land-resorts, but nowadays, we have all kinds of vacation
              properties, including houseboats. Houseboat timeshare works on a
              very simple principle. All 52 weeks of the year are divided
              between the owners (usually there are 51, considering that one
              week should remain for maintenance)! So they can own the resort on
              a 1/51 basis and can use the resort one week per year. Of course,
              one can buy as many houseboat timeshares as he/she wants to.
            </p>
          </div>
          <div style={Styles.ourBeliefItem}>
            <p style={Styles.ourBeliefTitle}>Ease Of Access</p>
            <p style={Styles.ourBeliefContent}>
              Namaskar, welcome to Incredible India, where culture echoes,
              tradition speaks, beauty enthralls and diversity delights. Bounded
              by the majestic Himalayan ranges in the north and edged by an
              endless stretch of golden beaches, India is a vivid kaleidoscope
              of landscapes, magnificent historical sites and royal cities,
              misty mountain retreats, colorful people, rich cultures and
              festivities. The timeless mystery and beauty of India has been
              waiting for you for 5000 years, always warm and inviting, a place
              of infinite variety – one that favors you with different facets of
              its fascination every time you visit India.
            </p>
          </div>
        </div>
        <p
          style={{
            color: "#9B9B9B",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "47px",
            marginLeft: "9%",
          }}
        >
          MESSAGE FROM OUR CEO
        </p>
        <div style={Styles.videoThumbnailContainer}>
          <div style={Styles.overlay}></div>
          <img
            src={ceo}
            style={Styles.videoThumbnailStyle}
            alt="video thumbnail"
          ></img>

          <a href="#" style={Styles.actionIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="white"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </a>
        </div>
        <p
          style={{
            color: "#9B9B9B",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "47px",
            marginLeft: "9%",
            marginTop: "77px",
          }}
        >
          MESSAGE FROM OUR CEO
        </p>
        <p
          style={{
            
            fontSize: "50px",
            fontWeight: "500",
            marginBottom: "50px",
            marginLeft: "9%",
            width:"545px"
          }}
        >
          Meet The People Who Make It Happen
        </p>
        <div style={Styles.humanGallery}>
            <div style={Styles.humanCard}>
                <div style={Styles.humanCardImage}>
                    <img style={{width:"100%"}} src={human1} alt="human image"></img>
                </div>
                <p style={{marginTop:"30px", marginBottom:"17px",fontSize:"14px", fontWeight:"500"}}>Hannah Poole</p>
                <p style={{fontSize:"14px",fontWeight:"400", color:"#4A4A4A", marginBottom:"67px"}}>CEO and Head of Marketing</p>
            </div>
            <div style={Styles.humanCard}>
                <div style={Styles.humanCardImage}>
                    <img style={{width:"100%"}} src={human2} alt="human image"></img>
                </div>
                <p style={{marginTop:"30px", marginBottom:"17px",fontSize:"14px", fontWeight:"500"}}>Earl Floyd</p>
                <p style={{fontSize:"14px",fontWeight:"400", color:"#4A4A4A", marginBottom:"67px"}}>CEO and Head of Marketing</p>
            </div>
            <div style={Styles.humanCard}>
                <div style={Styles.humanCardImage}>
                    <img style={{width:"100%"}} src={human3} alt="human image"></img>
                </div>
                <p style={{marginTop:"30px", marginBottom:"17px",fontSize:"14px", fontWeight:"500"}}>Edward Andrews</p>
                <p style={{fontSize:"14px",fontWeight:"400", color:"#4A4A4A", marginBottom:"67px"}}>CEO and Head of Marketing</p>
            </div>
            <div style={Styles.humanCard}>
                <div style={Styles.humanCardImage}>
                    <img style={{width:"100%"}} src={human4} alt="human image"></img>
                </div>
                <p style={{marginTop:"30px", marginBottom:"17px",fontSize:"14px", fontWeight:"500"}}>Rhoda Martin</p>
                <p style={{fontSize:"14px",fontWeight:"400", color:"#4A4A4A", marginBottom:"67px"}}>CEO and Head of Marketing</p>
            </div>
            <div style={Styles.humanCard}>
                <div style={Styles.humanCardImage}>
                    <img style={{width:"100%"}} src={human5} alt="human image"></img>
                </div>
                <p style={{marginTop:"30px", marginBottom:"17px",fontSize:"14px", fontWeight:"500"}}>Jayden Barrett</p>
                <p style={{fontSize:"14px",fontWeight:"400", color:"#4A4A4A", marginBottom:"67px"}}>CEO and Head of Marketing</p>
            </div>
        </div>
        <Testimonial></Testimonial>
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
  contactContainer: {
    marginLeft: "83px",
    marginRight: "83px",
    paddingLeft: "83px",
    background: "#D7BCBC",
    borderRadius: "50px",
    height: "120px",
    marginTop: "13px",
    display: "flex",
    alignItems: "center",
  },
  contactTitle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#D05AF8",
    marginBottom: "12px",
  },
  contactEmail: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "0",
  },
  separator: {
    width: "70px",
    height: "1px",
    background: "#D8D8D8",
    transform: "rotate(-70deg)",
    marginLeft: "153px",
    marginRight: "70px",
  },
  ourBeliefTitle: {
    fontSize: "30px",
    fontWeight: "500",
    marginBottom: "0",
    width: "356px",
  },
  ourBeliefContent: {
    fontSize: "13px",
    fontWeight: "400",
    marginBottom: "0",
    color: "#4A4A4A",
    width: "545px",
  },
  ourBeliefItem: { display: "flex", gap: "20ppx", marginBottom: "100px" },
  videoThumbnailStyle: {
    width: "100%",
  },
  videoThumbnailContainer: {
    position: "relative",
  },
  actionIcon: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    background: "rgba(0,0,0,.2)",
  },
  humanGallery:{
      width:"1108px",
      display:"flex",
      flexWrap:"wrap",
      gap:"20px",
      marginLeft:"9%"
  },
  humanCardImage:{
      width:"356px",
      height:"356px",
      overflow:"hidden"
  }
};
